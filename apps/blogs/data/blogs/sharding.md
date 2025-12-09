# Sharding : How Databases Scale with Data Partitioning

Sharding is a database architecture that involves splitting a large dataset into smaller and more manageable pieces called `Shards`.
Each `shard` is a separate database that holds a subset of the overall data, allowing for improved `performance`, `scalability`, and `availability`.

## Why Sharding?

As data grows, a single database can become a `bottleneck`, leading to slower query `performance` and increased latency.
Sharding helps distribute the load across multiple `servers`, enabling horizontal `scaling` and better resource utilization.
![Sharding Diagram](/assets/sharding.svg)

## How Sharding Works

1. **Shard Key**: A `shard key` is chosen to determine how data is distributed across `shards`. This key should be selected carefully to ensure even distribution and minimize hotspots.
2. **Data Distribution**: Data is partitioned based on the `shard key`. Common strategies include:
   - **Range based Sharding**: Data is divided into ranges based on the `shard key`.
   - **Hash based Sharding**: A `hash` function is applied to the `shard key` to determine the `shard` location.
   - **Directory based Sharding**: A `lookup table` is maintained to map `shard keys` to specific `shards`.
3. **Routing Queries**: When a `query` is made, the system uses the `shard key` to determine which `shard(s)` to `query`, ensuring efficient data retrieval.
4. **Replication**: Each `shard` can be `replicated` to ensure high availability and fault tolerance.

## Benefits of Sharding

- **Scalability**: Easily add more `shards` to accommodate growing data and traffic.
- **Performance**: Distributes the load, reducing contention and improving `query` response times.
- **Availability**: If one `shard` goes down, others can continue to operate, enhancing overall system reliability.
- **Cost Efficiency**: Utilize commodity hardware for `shards`, reducing infrastructure costs.

## Challenges of Sharding

- **Complexity**: Managing multiple `shards` adds complexity to the system architecture.
- **Data Consistency**: Ensuring data consistency across `shards` can be challenging, especially in distributed environments.
- **Rebalancing**: As data grows, `shards` may need to be `rebalanced`, which can be a complex and resource intensive process.
- **Joins and Transactions**: Performing `joins` and `transactions` across multiple `shards` can be difficult and may require additional logic.
- **Backup and Recovery**: Each `shard` needs to be `backed up` and `restored` independently, complicating disaster recovery plans.
- **Monitoring and Maintenance**: More `shards` mean more components to `monitor` and `maintain`, increasing operational overhead.
- **Latency**: Cross `shard` `queries` can introduce additional `latency`, impacting performance.
- **Development Complexity**: `Application logic` may need to be adjusted to handle `sharding`, increasing development time and complexity.

## Where Sharding is Implemented

Sharding can be implemented at different levels, including:

- **Application Level**: The `application` is responsible for determining the `shard` and routing `queries` accordingly.
- **Database Level**: Some `databases` offer built in `sharding` capabilities, managing the distribution and routing internally.
- **Middleware Level**: A `middleware` layer can be introduced to handle `sharding` logic, abstracting it away from the `application` and `database`.
