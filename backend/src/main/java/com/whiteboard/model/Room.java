package com.whiteboard.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="rooms")
public class Room {
	
	@Id
	private String id;
	
	private String name;
	private String ownerId;
	private String code;
	
	
	@Builder.Default
	private List<String> participants = new ArrayList<>();
	
	@Builder.Default
	private boolean isPublic = false;
	
	private int maxParticipants;
	
	@CreatedDate
	private LocalDateTime createdAt;
	
	@LastModifiedDate
	private LocalDateTime updatedAt;
	
	@Builder.Default
	private boolean active = true;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(String ownerId) {
		this.ownerId = ownerId;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public int getMaxParticipants() {
		return maxParticipants;
	}

	public void setMaxParticipants(int maxParticipants) {
		this.maxParticipants = maxParticipants;
	}
	
	

}
