package com.cybage.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
public class CartItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cartItemId;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "carts_item_id")
	@JsonBackReference(value = "itemJson")
	private Item item;

	@ManyToOne
	@JoinColumn(name = "user_email")
	@JsonBackReference
	private User userMail;

	

}
