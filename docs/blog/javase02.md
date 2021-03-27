---
title: JavaSE回顾02
date: 2021-03-27
sidebar : auto
sidebarDepth: 2
categories:
 - tech
tags:
 - java
---

## Hash家族

### hashcode()函数

- hashCode() 的作用是获取哈希码，也称为散列码；它实际上是根据对象存储地址返回一个int整数，哈希码的作用是确定该对象在哈希表中的索引位置

- java8默认是通过和当前线程有关的一个随机数+三个确定值，运用Marsaglia’s xorshift scheme随机数算法得到的一个随机数

  ```c
  static inline intptr_t get_next_hash(Thread * Self, oop obj) {
  intptr_t value = 0 ;
  if (hashCode == 0) {
    // 根据Park-Miller伪随机数生成器生成的随机数
     value = os::random() ;
  } else
  if (hashCode == 1) {
     // 此类方案将对象的内存地址，做移位运算后与一个随机数进行异或得到结果
     intptr_t addrBits = cast_from_oop<intptr_t>(obj) >> 3 ;
     value = addrBits ^ (addrBits >> 5) ^ GVars.stwRandom ;
  } else
  if (hashCode == 2) {
     value = 1 ;            // 返回固定的1
  } else if (hashCode == 3) {
     value = ++GVars.hcSequence ;  // 返回一个自增序列的当前值
  } else if (hashCode == 4) {
     value = cast_from_oop<intptr_t>(obj) ;  // 对象地址
  } else {
     // 通过和当前线程有关的一个随机数+三个确定值
     unsigned t = Self->_hashStateX ;
     t ^= (t << 11) ;
     Self->_hashStateX = Self->_hashStateY ;
     Self->_hashStateY = Self->_hashStateZ ;
     Self->_hashStateZ = Self->_hashStateW ;
     unsigned v = Self->_hashStateW ;
     v = (v ^ (v >> 19)) ^ (t ^ (t >> 8)) ;
     Self->_hashStateW = v ;
     value = v ;
  }
  value &= markOopDesc::hash_mask;
  if (value == 0) value = 0xBAD ;
  assert (value != markOopDesc::no_hash, "invariant") ;
  TEVENT (hashCode: GENERATE) ;
  return value;
  }
  
  ```

