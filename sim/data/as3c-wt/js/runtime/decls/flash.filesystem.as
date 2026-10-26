// `flash.filesystem` (AIR), implemented in `src/natives/system.rs`.
package flash.filesystem
{
   import flash.events.EventDispatcher;
   import flash.net.FileReference;
   import flash.utils.ByteArray;

   public class File extends FileReference
   {
      public function File(path:String = null);
      public static function get applicationDirectory():File;
      public static function get applicationStorageDirectory():File;
      public static function get documentsDirectory():File;
      public function get exists():Boolean;
      public function get isDirectory():Boolean;
      public function get isHidden():Boolean;
      public function get extension():String;
      public function get nativePath():String;
      public function get url():String;
      public function resolvePath(path:String):File;
      public function getDirectoryListing():Array;
      public function createDirectory():void;
      public function requestPermission():void;
   }

   public class FileStream extends EventDispatcher
   {
      public function FileStream();
      public function get bytesAvailable():uint;
      public function get position():Number;
      public function set position(value:Number):void;
      public function open(file:File, fileMode:String):void;
      public function close():void;
      public function readUTF():String;
      public function readUTFBytes(length:uint):String;
      public function readBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void;
      public function writeUTF(value:String):void;
      public function writeBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void;
   }

   public final class FileMode
   {
      public static const READ:String = "read";
      public static const WRITE:String = "write";
      public static const APPEND:String = "append";
      public static const UPDATE:String = "update";
   }
}
