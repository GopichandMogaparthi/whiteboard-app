package com.whiteboard.repository;

import com.whiteboard.model.*;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends MongoRepository<Room, String>{
	Optional<Room> findByCode(String code);
	List<Room> findByOwnerId(String ownerId);
	List<Room> findByIsPublicAndActive(boolean isPublic, boolean active);
	
}
