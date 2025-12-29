# Inside the Machine: How a CPU Works

The Central Processing Unit (CPU) is the brain of the computer. It doesn't think like a human; instead, it follows a strict routine. Its job is simple: get an instruction, understand it, and do it billions of times every second.

## The Instruction Cycle

At its core, a CPU repeats a basic loop called the `Fetch-Decode-Execute` cycle. This is driven by the internal clock (measured in `GHz`).

### 1. Fetch

The CPU has a special register called the `Program Counter`, which holds the address of the next instruction. The CPU asks the memory (`RAM`), "What's at this address?" and pulls that raw instruction code into the `Instruction Register`.

### 2. Decode

The raw 1s and 0s (`binary`) don't mean anything until they are interpreted. The `Control Unit` decodes this binary. It might translate `10110001` into "Add the numbers in `Register A` and `Register B`" This is where the specific language of the CPU (`Instruction Set Architecture` or `ISA`) matters.

### 3. Execute

Now that the CPU knows what to do, it acts.

- `ALU` (`Arithmetic Logic Unit`): If it's math (add, subtract) or logic (`AND`, `XOR`), the `ALU` crunches the numbers.
- `Memory Operations`: It might move data between `registers` and `RAM`.
- `Control Flow`: It might jump to a different part of the program (changing the `Program Counter`).

## Pipelining

If the CPU did steps 1, 2, and 3 strictly one after another, parts of the circuitry would sit idle. To fly through instructions, modern CPUs use `Pipelining`.

- While Instruction A is `Executing`...
- Instruction B is `Decoded`...
- And Instruction C is `Fetched`.

This ensures that every part of the CPU is busy every single clock cycle.

## Superscalar Architecture

Pipelining is great, but what if we could do two things at once?
`Superscalar` processors have duplicate functional units (like multiple `ALU`s). Instead of just overlapping the stages (`pipelining`), the CPU physically executes multiple instructions in the exact same cycle, provided they don't depend on each other.

The `scheduler` analyzes the stream of instructions to find ones that don't depend on each other. It then assigns these independent instructions to available `execution units`, allowing them to run `side-by-side` in the same `clock cycle`.

## The Memory Hierarchy

Modern CPUs are significantly faster than main memory (`RAM`). If the processor had to fetch data from `RAM` for every operation, it would spend the majority of its cycles idle, waiting for data to arrive.

To solve this, we use a hierarchy of caches:

- `Registers` (Instant): Tiny storage right inside the CPU. Access takes ~1 cycle.
- `L1 Cache` (Very Fast): Small, extremely fast memory built into the core. ~4 cycles.
- `L2`/`L3 Cache` (Fast): Larger but slightly slower caches shared between cores. ~10-40 cycles.
- `Main Memory`/`RAM` (Slow): Massive storage but far away. ~200 cycles.
- `SSD`/Disk (Glacial): Millions of cycles.

The goal is to keep the data that the CPU needs in the `L1 cache`, ensuring the processor never has to stall.
