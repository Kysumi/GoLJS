import Vector from "../lib/vector";
import GameObject from "./gameObject";

export default class GridObject extends GameObject {
    private gridPosition: Vector;
    private tileSize: Vector;
	private tilePadding: number = 0;

    constructor() {
        super();
        this.gridPosition = new Vector(0,0);
        this.tileSize = new Vector(0,0);
    }

    public setGridPosition(position: Vector) {
        this.gridPosition = position;
        this.updatePixelPosition();
    }

    protected updatePixelPosition() {
        const xPos = (this.tileSize.x + this.tilePadding) * this.gridPosition.x;
		const yPos = (this.tileSize.y + this.tilePadding) * this.gridPosition.y;
		this.pixelPosition = new Vector(xPos, yPos);
    }

    protected setTileSize(size: Vector) {
        this.tileSize = size;
    }

    protected setTilePadding(padding: number) {
        this.tilePadding = padding
    }
}