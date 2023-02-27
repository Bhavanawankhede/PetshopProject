package com.cybage.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.cybage.dtos.CartItemResponse;

@Entity
@Table(name = "order_table")
public class Order {

	@Id
	@GeneratedValue
	private int id;
	private String orderedOn;
	private double amount;
	private String address;
	private String payment;

	

	@ManyToOne
	private User user;

	@ManyToOne
	private Item item;

	public Order() {
		super();
	}
	

	public Order(int id, String orderedOn, float amount, User user, Item item,String address) {
		super();
		this.id = id;
		this.orderedOn = orderedOn;
		this.amount = amount;
		this.user = user;
		this.item = item;
		this.address=address;
		
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOrderedOn() {
		return orderedOn;
	}

	public void setOrderedOn(String orderedOn) {
		this.orderedOn = orderedOn;
	}

	public double getAmount() {
		return amount;
	}

	public Item getItem() {
		return item;
	}


	public void setItem(Item item) {
		this.item = item;
	}


	public void setAmount(double d) {
		this.amount = d;
	}

	public User getUser() {
		return user;
	}

	public String getPayment() {
		return payment;
	}


	public void setPayment(String payment) {
		this.payment = payment;
	}


	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "Order [id=" + id + ", orderedOn=" + orderedOn + ", amount=" + amount + ", address=" + address
				+ ", payment=" + payment + ", user=" + user + ", item=" + item + "]";
	}

	


	



	



	
}

	
	
	
	
	
	