// `flash.media`, implemented in `src/natives/system.rs`: silent, with the
// timing a player keeps.
package flash.media
{
   import flash.events.EventDispatcher;
   import flash.net.URLRequest;
   import flash.utils.ByteArray;

   public class Sound extends EventDispatcher
   {
      public function Sound(stream:URLRequest = null, context:SoundLoaderContext = null);
      public function get length():Number;
      public function get url():String;
      public function load(stream:URLRequest, context:SoundLoaderContext = null):void;
      public function loadCompressedDataFromByteArray(bytes:ByteArray, bytesLength:uint):void;
      public function play(startTime:Number = 0, loops:int = 0, sndTransform:SoundTransform = null):SoundChannel;
      public function close():void;
   }

   public final class SoundChannel extends EventDispatcher
   {
      public function get position():Number;
      public function get soundTransform():SoundTransform;
      public function set soundTransform(sndTransform:SoundTransform):void;
      public function stop():void;
   }

   public final class SoundTransform
   {
      public function SoundTransform(vol:Number = 1, panning:Number = 0);
      public function get volume():Number;
      public function set volume(volume:Number):void;
      public function get pan():Number;
      public function set pan(panning:Number):void;
   }

   public class SoundLoaderContext
   {
      public var bufferTime:Number;
      public var checkPolicyFile:Boolean;
      public function SoundLoaderContext(bufferTime:Number = 1000, checkPolicyFile:Boolean = false);
   }

   public final class Camera extends EventDispatcher
   {
   }
}
