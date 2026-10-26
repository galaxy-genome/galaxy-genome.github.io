// `flash.ui`'s keyboard, mouse and multitouch classes, implemented in
// `src/natives/text_events.rs`.
package flash.ui
{
   public class Keyboard
   {
      public static const A:uint = 65;
      public static const B:uint = 66;
      public static const C:uint = 67;
      public static const D:uint = 68;
      public static const E:uint = 69;
      public static const F:uint = 70;
      public static const G:uint = 71;
      public static const H:uint = 72;
      public static const I:uint = 73;
      public static const J:uint = 74;
      public static const K:uint = 75;
      public static const L:uint = 76;
      public static const M:uint = 77;
      public static const N:uint = 78;
      public static const O:uint = 79;
      public static const P:uint = 80;
      public static const Q:uint = 81;
      public static const R:uint = 82;
      public static const S:uint = 83;
      public static const T:uint = 84;
      public static const U:uint = 85;
      public static const V:uint = 86;
      public static const W:uint = 87;
      public static const X:uint = 88;
      public static const Y:uint = 89;
      public static const Z:uint = 90;
      public static const NUMBER_0:uint = 48;
      public static const NUMBER_1:uint = 49;
      public static const NUMBER_2:uint = 50;
      public static const NUMBER_3:uint = 51;
      public static const NUMBER_4:uint = 52;
      public static const NUMBER_5:uint = 53;
      public static const NUMBER_6:uint = 54;
      public static const NUMBER_7:uint = 55;
      public static const NUMBER_8:uint = 56;
      public static const NUMBER_9:uint = 57;
      public static const BACKSPACE:uint = 8;
      public static const TAB:uint = 9;
      public static const ENTER:uint = 13;
      public static const SHIFT:uint = 16;
      public static const CONTROL:uint = 17;
      public static const ALTERNATE:uint = 18;
      public static const CAPS_LOCK:uint = 20;
      public static const ESCAPE:uint = 27;
      public static const SPACE:uint = 32;
      public static const PAGE_UP:uint = 33;
      public static const PAGE_DOWN:uint = 34;
      public static const END:uint = 35;
      public static const HOME:uint = 36;
      public static const LEFT:uint = 37;
      public static const UP:uint = 38;
      public static const RIGHT:uint = 39;
      public static const DOWN:uint = 40;
      public static const INSERT:uint = 45;
      public static const DELETE:uint = 46;
      public static const BACK:uint = 16777238;
      public static const MENU:uint = 16777234;
      public static const SEARCH:uint = 16777247;
   }

   public final class Mouse
   {
      public static function get cursor():String;
      public static function set cursor(value:String):void;
      public static function get supportsCursor():Boolean;
      public static function get supportsNativeCursor():Boolean;
      public static function hide():void;
      public static function show():void;
   }

   public final class Multitouch
   {
      public static function get inputMode():String;
      public static function set inputMode(value:String):void;
      public static function get maxTouchPoints():int;
      public static function get supportsTouchEvents():Boolean;
      public static function get supportsGestureEvents():Boolean;
   }

   public final class MultitouchInputMode
   {
      public static const GESTURE:String = "gesture";
      public static const NONE:String = "none";
      public static const TOUCH_POINT:String = "touchPoint";
   }
}
