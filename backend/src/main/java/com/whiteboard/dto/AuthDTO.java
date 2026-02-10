package com.whiteboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class AuthDTO {

	@Data
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class LoginRequest{
		private String username;
		private String password;
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		
		
		
	}
	
	@Data
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class RegisterRequest{
		private String username;
		private String email;
		private String password;
		private String displayName;
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getDisplayName() {
			return displayName;
		}
		public void setDisplayName(String displayName) {
			this.displayName = displayName;
		}
		
		
		
	}
	
	  @Data
	    @Builder
	    @NoArgsConstructor
	    @AllArgsConstructor
	    public static class AuthResponse {
	        private String token;
	        private UserDTO user;
			public String getToken() {
				return token;
			}
			public void setToken(String token) {
				this.token = token;
			}
			public UserDTO getUser() {
				return user;
			}
			public void setUser(UserDTO user) {
				this.user = user;
			}
	        
	    }
	
	@Data
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class AuthRequest{
		private String token;
		private UserDTO user;
		public String getToken() {
			return token;
		}
		public void setToken(String token) {
			this.token = token;
		}
		public UserDTO getUser() {
			return user;
		}
		public void setUser(UserDTO user) {
			this.user = user;
		}
		
		
	}
	
	@Data
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class UserDTO{
		private String id;
		private String username;
		private String email;
		private String displayName;
		private String avatarColor;
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getDisplayName() {
			return displayName;
		}
		public void setDisplayName(String displayName) {
			this.displayName = displayName;
		}
		public String getAvatarColor() {
			return avatarColor;
		}
		public void setAvatarColor(String avatarColor) {
			this.avatarColor = avatarColor;
		}
		
		
	}
	
	
	
}
