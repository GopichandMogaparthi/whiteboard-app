package com.whiteboard.repository;

import com.whiteboard.model.DrawEvent;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrawingRepository extends MongoRepository<DrawEvent, String>{

	List<DrawEvent> findByRoomIdOrderByTimestampAsc(String roomId);
	void deleteByRoomId(String roomId);
	long countByRoomId(String roomId);
	
	
}
