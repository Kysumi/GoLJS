/**
 * Handles all key presses for registered keys.
 *
 * You can find more keys here
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 */
export default class Key {
  /**
   * The kycode this key is listening for
   */
  protected keyCode: string;

  /**
   * The state of the key
   */
  protected isDown: boolean = false;
  protected isUp: boolean = true;

  /**
   * Event handlers for when the key is being pressed
   */
  protected press: any;
  protected release: any;
  protected held: any;

  // default constructor
  constructor(keyCode: string) {
    this.keyCode = keyCode;
  }

  /**
   * When a key is pressed this is run to check if the
   * key being pressed is one we are listening for.
   */
  protected downHandler = (event: any) => {
    if (event.key === this.keyCode) {
      if (this.isUp && typeof this.press !== "undefined") {
        this.press();
      }
      this.isDown = true;
      this.isUp = false;

      event.preventDefault();
    }
  };

  /**
   * When a key is pressed this is run to check if the
   * key being pressed is one we are listening for.
   */
  protected heldHandler = (event: any) => {
    if (event.key === this.keyCode && event.repeat) {
      if (this.isUp && typeof this.press !== "undefined") {
        this.press();
      }
      this.isDown = true;
      this.isUp = false;

      event.preventDefault();
    }
  };

  /**
   * When a key is pressed this is run to check if the
   * key being pressed is one we are listening for.
   */
  protected upHandler = (event: any) => {
    if (event.key === this.keyCode) {
      if (this.isDown && typeof this.release !== "undefined") {
        this.release();
      }
      this.isDown = false;
      this.isUp = true;

      event.preventDefault();
    }
  };

  /**
   * Make this key start to listen for events
   */
  public register() {
    window.addEventListener("keydown", this.downHandler, false);
    window.addEventListener("keyup", this.upHandler, false);
    window.addEventListener("keydown", this.held, false);
  }

  /**
   * Define what should happen when this key is released.
   *
   * @param event
   */
  public setUpEvent(event: any) {
    this.release = event;
  }

  /**
   * Define what should happen when this key is pressed.
   *
   * @param event
   */
  public setDownEvent(event: any) {
    this.press = event;
  }

  /**
   * Define what should happen when this key is held.
   *
   * @param event
   */
  public setHeldEvent(event: any) {
    this.held = event;
  }

  /**
   * Remove listeners for this key
   */
  public deregister() {
    window.removeEventListener("keydown", this.downHandler);
    window.removeEventListener("keyup", this.upHandler);
  }
}
