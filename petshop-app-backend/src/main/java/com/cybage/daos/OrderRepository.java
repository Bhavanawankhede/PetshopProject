package com.cybage.daos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybage.entities.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {


}
