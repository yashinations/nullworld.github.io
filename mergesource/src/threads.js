let collision_thread = 
function(){
	if(avatar.alive){	
		for (let s in camera.scope_objects){
			let obj_in_question = camera.scope_objects[s];
			//make better make all this better
			let floored = false;
			let lefted = false;
			let righted = false;
			let turn_side = false;
			let turn_floor = true;
			let saw = false;
			let kill = false;
			for (o in tile_map){
				let current_block = tile_map[o];
				if(!current_block.solid){
					continue;
				}//move all sight logic elsewhere
				//sight logic
				if(obj_in_question !== avatar){
				  let lx1 = obj_in_question.rect.x_coord;
				  let ly1 = obj_in_question.rect.y_coord + (obj_in_question.rect.height / 2);
				  let lx2 = avatar.rect.x_coord;
				  let ly2 = avatar.rect.y_coord + (avatar.rect.height / 2);
				  let a = lx1 - lx2;
				  let b = ly1 - ly2;
				  if(b < 50){
					  let c2 = Math.pow(a,2) + Math.pow(b,2);
					  let c = Math.sqrt(c2);
					  if(c > 200){
						saw = false;
					  }
					  else{
						  if (yash_math.rect_line(current_block.rect,lx1,ly1,lx2,ly2)){
								saw = false;
						  }
					   }
				  }				
				  else{
					saw = false;
				  }
				}
				//just do blocks against avatar for now, come back to the rest later
				if(collision.overlapping(obj_in_question.bounding_boxes.boxes[left_index],current_block.rect))
				{
					lefted = true;
					turn_side = true;
				}
				if(collision.overlapping(obj_in_question.bounding_boxes.boxes[right_index],current_block.rect))
				{
					righted = true;
					turn_side = true;
				}
				if(collision.overlapping(obj_in_question.bounding_boxes.boxes[floor_index],current_block.rect))
				{
					floored = true;			
				}								
				if(collision.overlapping(obj_in_question.bounding_boxes.boxes[future_left_floor_index],current_block.rect))
				{
					if(obj_in_question.patrol_left){
						turn_floor = false;
					}
				}	
				if(collision.overlapping(obj_in_question.bounding_boxes.boxes[future_right_floor_index],current_block.rect))
				{	
					if(obj_in_question.patrol_right){
						turn_floor = false;
					}
				}		
			}
			
			if(obj_in_question !== avatar){
				if(collision.overlapping(obj_in_question.rect,avatar.rect))
				{	
					obj_in_question.behavior = obj_in_question.kill;
					obj_in_question.behavior(obj_in_question);
				}
			}
			if(obj_in_question.behavior === obj_in_question.patrol && saw){
				obj_in_question.behavior = obj_in_question.follow;
			}
			else if(obj_in_question.behavior === obj_in_question.follow && !saw){
				obj_in_question.behavior = obj_in_question.patrol;
			}	
			if(obj_in_question.behavior === obj_in_question.patrol){
				obj_in_question.turn = turn_side || turn_floor;
			}
			obj_in_question.lefted = lefted;
			obj_in_question.righted = righted;
			obj_in_question.floored = floored;
			obj_in_question.logic_thread(obj_in_question);
			obj_in_question.bounding_boxes.move();
		}	
		if(!avatar.floored){
			camera_scroll_y += avatar.gravity;	
		}
	}
	setTimeout(collision_thread,18);
}