// `flash.utils` classes and functions, implemented in `src/natives/utils2.rs`.
package flash.utils
{
   public class ByteArray
   {
      public function ByteArray();
      public function get length():uint;
      public function set length(value:uint):void;
      public function get position():uint;
      public function set position(value:uint):void;
      public function get bytesAvailable():uint;
      public function get endian():String;
      public function set endian(value:String):void;
      public function clear():void;
      public function uncompress(algorithm:String = "zlib"):void;
      public function readByte():int;
      public function readUnsignedByte():uint;
      public function readUnsignedShort():uint;
      public function readUnsignedInt():uint;
      public function readFloat():Number;
      public function readUTF():String;
      public function readUTFBytes(length:uint):String;
      public function readBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void;
      public function readObject():*;
      public function writeByte(value:int):void;
      public function writeShort(value:int):void;
      public function writeUnsignedInt(value:uint):void;
      public function writeFloat(value:Number):void;
      public function writeUTF(value:String):void;
      public function writeUTFBytes(value:String):void;
      public function writeBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void;
      public function writeObject(object:*):void;
   }

   public class Timer extends EventDispatcher
   {
      public function Timer(delay:Number, repeatCount:int = 0);
      public function get delay():Number;
      public function set delay(value:Number):void;
      public function get currentCount():int;
      public function get running():Boolean;
      public function start():void;
      public function stop():void;
      public function reset():void;
   }

   public function getQualifiedClassName(value:*):String;
   public function getQualifiedSuperclassName(value:*):String;
   public function getDefinitionByName(name:String):Object;
   public function describeType(value:*):XML;
   public function setTimeout(closure:Function, delay:Number, ... arguments):uint;
}

package flash.utils
{
   public dynamic class Dictionary
   {
      public function Dictionary(weakKeys:Boolean = false);
   }
}
