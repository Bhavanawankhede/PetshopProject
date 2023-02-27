package com.cybage.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.entities.FavouriteItem;

@Repository
public interface FavouriteItemRepository extends JpaRepository<FavouriteItem, Integer> {
	@Query(value =  "select * from favourite_item where user_email=?1" , nativeQuery = true)
	public List<FavouriteItem> getFavouriteList(String userEmail);
	
	@Query(value =  "select * from favourite_item where fav_item_id=?1" , nativeQuery = true)
	public FavouriteItem getFavouriteItemIdFromItemId(int itemId);
}
