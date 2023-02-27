package com.cybage.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
public class Item {

	@Id
	@GeneratedValue
	private int itemId;

	private String categoryName;
	private String itemName;
	private double itemPrice;
	private String itemDescription;
	private String itemImage;

	@ManyToOne
	@JoinColumn(name = "item_category_id")
	@JsonBackReference(value = "itemCategoryJson")
	private ItemCategory itemCategory;

	@OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
	@JsonManagedReference(value = "itemJson")
	@JsonIgnore
	private List<FavouriteItem> favouriteItem;

	@OneToMany(mappedBy = "item", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonManagedReference(value = "itemJson")
	@JsonIgnore
	private List<CartItem> cartItem;

}
