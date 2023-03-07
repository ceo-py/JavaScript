function calculateNeededPaint(numbers) {
    let [house_height, house_length, wall_of_the_roof_height] = numbers.map(x => Number(x));

    const windows = 2.25;
    const door = 2.4;
    const green_paint = 3.4;
    const red_paint = 4.3;

// walls
    let side_wall = house_height * house_length;
    let side_wall_total = (side_wall * 2) - (windows * 2);
    let back_wall = ((house_height * house_height) * 2) - door;
    let total_area_walls = side_wall_total + back_wall;
    let green_paint_needed = total_area_walls / green_paint;

//roof
    let two_rectangle_roof = 2 * (house_height * house_length);
    let two_triangle_roof = 2 * (house_height * wall_of_the_roof_height / 2);
    let total_area_roof = two_rectangle_roof + two_triangle_roof;
    let red_paint_needed = total_area_roof / red_paint;

    console.log(green_paint_needed.toFixed(2));
    console.log(red_paint_needed.toFixed(2));

}

calculateNeededPaint(['6', '10', '5.2'])