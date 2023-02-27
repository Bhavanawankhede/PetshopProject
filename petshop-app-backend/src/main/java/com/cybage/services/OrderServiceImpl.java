package com.cybage.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.OrderRepository;
import com.cybage.dtos.CartItemResponse;
import com.cybage.entities.Item;
import com.cybage.entities.Order;
import com.cybage.entities.User;




@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	OrderRepository orderRepository;

	@Autowired
	ICartService cartService;
	@Autowired 
	IUserService userService;

	@Override
	public void placeOrder(String userEmail , String address,String payment) {
		List<CartItemResponse> cartItems = cartService.getCartList(userEmail);

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm");
		Date date = new Date(System.currentTimeMillis());
		String dateTime = formatter.format(date);

		for (CartItemResponse cart : cartItems) {
			Order order = new Order();
			System.out.println("in order");
			order.setAmount(cart.getItemPrice());
			order.setOrderedOn(dateTime);
			User user = new User();
			user.setUserEmail(userEmail);
			order.setUser(user);
			Item item = new Item();
			item.setItemId(cart.getItemId());
			order.setItem(item);
			order.setAddress(address);
			order.setPayment(payment);
		
			orderRepository.save(order);
			order = null;
		}
		
		System.out.println("remove Cart");
		cartService.clearCartList(userEmail);
		
	}

}
