package com.cybage.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.entities.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {
	@Query(value = "select * from cart_item where user_email=?1" , nativeQuery = true)
	public List<CartItem> getCartList(String userEmail);
	
	public CartItem findByCartItemId(int cartItemId);
	
	@Query(value =  "select * from cart_item where carts_item_id=?1" , nativeQuery = true)
	public CartItem getCartItemIdFromItemId(int itemId);
	
	@Modifying
	@Transactional
	@Query(value =  "delete from cart_item where cart_item_id=?1" , nativeQuery = true)
	public void deleteByCartItemId(int cartItemId);

	@Modifying
	@Transactional
	@Query(value =  "delete from cart_item where user_email=?1" , nativeQuery = true)
	public void deleteByUserEmail(String userEmail);

	//public void deleteByUserEmail(String userEmail);
}
