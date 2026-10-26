// `flash.desktop` (AIR), implemented in `src/natives/system.rs`.
package flash.desktop
{
   import flash.events.EventDispatcher;

   public final class NativeApplication extends EventDispatcher
   {
      public static function get nativeApplication():NativeApplication;
      public function get applicationDescriptor():XML;
      public function get systemIdleMode():String;
      public function set systemIdleMode(value:String):void;
   }

   public final class SystemIdleMode
   {
      public static const KEEP_AWAKE:String = "keepAwake";
      public static const NORMAL:String = "normal";
   }

   public class Clipboard
   {
      public static function get generalClipboard():Clipboard;
      public function getData(format:String, transferMode:String = "originalPreferred"):Object;
      public function setData(format:String, data:Object, serializable:Boolean = true):Boolean;
   }
}
