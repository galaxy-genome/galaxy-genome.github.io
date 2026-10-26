// `flash.ui` game input, implemented in `src/natives/system.rs`: no pads
// are connected.
package flash.ui
{
   import flash.events.EventDispatcher;

   public final class GameInput extends EventDispatcher
   {
      public function GameInput();
      public static function get isSupported():Boolean;
      public static function get numDevices():int;
      public static function getDeviceAt(index:int):GameInputDevice;
   }

   public final class GameInputDevice
   {
      public function get id():String;
      public function get name():String;
      public function get enabled():Boolean;
      public function set enabled(value:Boolean):void;
      public function get sampleInterval():int;
      public function set sampleInterval(value:int):void;
      public function get numControls():int;
      public function getControlAt(i:int):GameInputControl;
   }

   public class GameInputControl extends EventDispatcher
   {
      public function get id():String;
      public function get value():Number;
      public function get minValue():Number;
      public function get maxValue():Number;
   }
}
