package com.cybage.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table
public class ItemCategory {

	@Id
	@GeneratedValue
	private int itemCategoryId;
	private String itemCategoryName;
	private String itemCategoryImage;
	private String itemCategoryDescription;

	@OneToMany(mappedBy = "itemCategory", cascade = CascadeType.ALL)
	@JsonManagedReference(value = "itemCategoryJson")
	@JsonIgnore
	private List<Item> items;
}
