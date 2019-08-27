import Vector from "../lib/vector"

export default class GameObject {
	protected pixelPosition: Vector;

	constructor() {
		this.pixelPosition = new Vector(0,0);
	}

	public setPixelPosition(x: number, y: number) {
		this.pixelPosition = new Vector(x,y);
	}

	public setPixelPosition(position: Vector) {
		this.pixelPosition = position;
	}

	public getPixelPosition(): Vector {
		return this.pixelPosition;
	}
}