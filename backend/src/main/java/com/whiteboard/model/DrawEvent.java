package com.whiteboard.model;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="draw_events")
public class DrawEvent {
	@Id
	private String id;
	
	private String roomId;
	
	private String userId;
	
	private String username;
	
	private DrawAction action;
	
	private DrawTools tool;
	
	private List<Point> points;
	private String color;
	private Integer strokeWidth;
	private String text;
	
	public String getRoomId() {
		return roomId;
	}
	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public DrawAction getAction() {
		return action;
	}
	public void setAction(DrawAction action) {
		this.action = action;
	}
	public DrawTools getTool() {
		return tool;
	}
	public void setTool(DrawTools tool) {
		this.tool = tool;
	}
	public List<Point> getPoints() {
		return points;
	}
	public void setPoints(List<Point> points) {
		this.points = points;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public Integer getStrokeWidth() {
		return strokeWidth;
	}
	public void setStrokeWidth(Integer strokeWidth) {
		this.strokeWidth = strokeWidth;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	@CreatedDate
	private LocalDateTime timestamp;
	
	@Data
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Point{
		public double getX() {
			return x;
		}
		public void setX(double x) {
			this.x = x;
		}
		public double getY() {
			return y;
		}
		public void setY(double y) {
			this.y = y;
		}
		private double x;
		private double y;
	}
	
	public enum DrawAction{
		DRAW, ERASE, CLEAR, UNDO, REDO, TEXT_ADD
	}
	public enum DrawTools{
		PEN, ERASER, LINE, RECTANGLE, CIRCLE, ELLIPSE, TEXT, ARROW
	}
}