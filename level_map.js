//each line of characters, with of environment
let level_width = 20;
//size each character represents in game
let block_size = 25;
//plyable environment
let level_map = 
	[
		"XXXXXXXXXXXXXXXXXXXX" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"XP00000000000000000X" +
		"X00000000000000000>X" +
		"XXXXXXXXXXXXXXXXXXXX",
		"XXXXXXXXXXXXXXXXXXXX" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"XP0000000X000000000X" +
		"X0000000XXX0000000>X" +
		"XXXXXXXXXXXXXXXXXXXX",
		"XXXXXXXXXXXXXXXXXXXX" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"XP00000000000000000X" +
		"X00000000000000000>X" +
		"XXXXXXXXX00XXXXXXXXX" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X^^^^^^^^^^^^^^^^^^X" +
		"XXXXXXXXXXXXXXXXXXXX",
		"XXXXXXXXXXXXXXXXXXXX" +
		"XP00000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"XXX0000000000000000X" +
		"XXXXX00000000000000X" +
		"XXXXX00000000000000X" +
		"XXXXXXX000000000000X" +
		"XXXXXXX000000000000X" +
		"XXXXXXXXX0000000000X" +
		"XXXXXXXXX0000000000X" +
		"XXXXXXXXXXX00000000X" +
		"XXXXXXXXXXX00000000X" +
		"XXXXXXXXXXXXX000000X" +
		"XXXXXXXXXXXXX000000X" +
		"XXXXXXXXXXXXXXX0000X" +
		"XXXXXXXXXXXXXXX0000X" +
		"XXXXXXXXXXXXXXXXX00X" +
		"XXXXXXXXXXXXXXXXX0>X" +
		"XXXXXXXXXXXXXXXXXXXX",
		"XXXXXXXXXXXXXXXXXXXX" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"XP00000000000000000X" +
		"X000000000000000000X" +
		"X00000000000000000>X" +
		"XXXXXH000000000XXXXX" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X^^^^^^^^^^^^^^^^^^X" +
		"XXXXXXXXXXXXXXXXXXXX",
		"XXXXXXXXXXXXXXXXXXXX" +
		"XL00000000000000000X" +
		"X000000000000000000X" +
		"X00000000V000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000000000000X" +
		"X000000000XXXXX0000X" +
		"X000000000X00000000X" +
		"X000000000X00000000X" +
		"X000000000X00000000X" +
		"X0P0000000X00000000X" +
		"X000000000XH0000000X" +
		"XXXXXXXXX^X>0000000X" +
		"XXXXXXXXXXXXXXXXXXXX"
	]