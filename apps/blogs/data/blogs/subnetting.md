# Subnetting: A way to divide a network into smaller, manageable parts.

`Subnetting` is the way we break down a big `network` into smaller pieces. This helps us manage the `network` better, improve security, enable efficient routing, and ensure that data gets to the right place.

## History of Subnetting

`Subnetting` was introduced in the 1980s as a way to improve the efficiency of `IP address` allocation. Before subnetting, large organizations often wasted many IP addresses because they were assigned a whole class of addresses (like `Class A`, `Class B`, or `Class C`) even if they only needed a few. Subnetting allowed these organizations to divide their `networks` into smaller, more efficient segments.

## Why Subnetting?

`Subnetting` divides a big network into smaller parts called `subnets`. This helps in:

- Better management of the `network`.
- Improved security by isolating parts of the `network`.
- Efficient use of `IP addresses`.
- Reduced `network` traffic.
- Easier troubleshooting.

## How Subnetting Works

When we `subnet` a `network`, we take the original `IP address` and divide it into two parts: the `network` part and the `host` part. The network part identifies the `subnet`, while the `host` part identifies individual devices within that subnet.

To create `subnets`, we use a `subnet mask`. The subnet mask determines how many bits are used for the `network` part and how many are used for the `host` part. By changing the subnet mask, we can create multiple subnets from a single `network`.

## Subnetting Math

To calculate the number of `subnets` and `hosts`, use the following formulas:

- Number of subnets: `2^n`
  - `n` is the number of bits borrowed from the host portion of the original `IP address` to create subnets.
- Number of hosts per subnet: `2^h - 2`
  - `h` is the number of bits remaining for hosts.
  - Subtract 2 to account for the network and broadcast addresses, which cannot be assigned to hosts.

## Example of Subnetting

For example, if we have a `Class C` `network` with the `IP address` `192.168.1.0` and a default `subnet mask` of `255.255.255.0`, we can create smaller `subnets` by borrowing bits from the `host` part. If we borrow 2 bits, we can create 4 `subnets`, each with 62 usable `host` addresses. It looks like this:

```text
Subnet 1: 192.168.1.0/26 (usable IP range: 192.168.1.1 - 192.168.1.62)
Subnet 2: 192.168.1.64/26 (usable IP range: 192.168.1.65 - 192.168.1.126)
Subnet 3: 192.168.1.128/26 (usable IP range: 192.168.1.129 - 192.168.1.190)
Subnet 4: 192.168.1.192/26 (usable IP range: 192.168.1.193 - 192.168.1.254)
```

![Subnetting Diagram](/assets/subnetting.svg)

## CIDR (Classless Inter-Domain Routing)

`CIDR` is a method for allocating `IP addresses` and routing that replaces the old system based on classes (like `Class A`, `Class B`, `Class C`). `CIDR` allows for more flexible `subnetting` by using `VLSM` (variable length subnet masks). This means that `networks` can be divided into `subnets` of different sizes based according to the specific needs of the organization.

## Routing Between Subnets

- `Routers` are used to connect different `subnets`. They help direct traffic between subnets and ensure that data reaches its intended destination.
- Each `subnet` has its own unique `network` address, and `routers` use this information to forward packets appropriately.
- Routing protocols like `OSPF` and `EIGRP` can be used to manage the routing between `subnets` efficiently.

## Real World Use

`Subnetting` is widely used in businesses and organizations to manage their `networks`. For example, a company might have different `subnets` for different departments, such as `HR`, `IT`, and `Sales`. This way, they can control access to sensitive information and reduce `network` congestion.
