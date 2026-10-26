// `flash.net`, implemented in `src/natives/system.rs`.
package flash.net
{
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;

   public final class URLRequest
   {
      public function URLRequest(url:String = null);
      public function get url():String;
      public function set url(value:String):void;
   }

   public class URLLoader extends EventDispatcher
   {
      public var data:*;
      public var dataFormat:String;
      public var bytesLoaded:uint;
      public var bytesTotal:uint;
      public function URLLoader(request:URLRequest = null);
      public function load(request:URLRequest):void;
      public function close():void;
   }

   public dynamic class URLVariables
   {
      public function URLVariables(source:String = null);
      public function decode(source:String):void;
      public function toString():String;
   }

   public class SharedObject extends EventDispatcher
   {
      public static function getLocal(name:String, localPath:String = null, secure:Boolean = false):SharedObject;
      public function get data():Object;
      public function clear():void;
      public function flush(minDiskSpace:int = 0):String;
   }

   public class FileReference extends EventDispatcher
   {
      public function get name():String;
   }

   public class NetStream extends EventDispatcher
   {
   }

   public class DatagramSocket extends EventDispatcher
   {
      public function DatagramSocket();
      public function get bound():Boolean;
      public function bind(localPort:int = 0, localAddress:String = "0.0.0.0"):void;
      public function receive():void;
      public function send(bytes:ByteArray, offset:uint = 0, length:uint = 0, address:String = null, port:int = 0):void;
      public function close():void;
   }

   public function navigateToURL(request:URLRequest, window:String = null):void;
}

package flash.net.dns
{
   import flash.events.EventDispatcher;

   public final class DNSResolver extends EventDispatcher
   {
      public function DNSResolver();
      public function lookup(host:String, recordType:Class):void;
   }

   public class ResourceRecord
   {
      public function get name():String;
      public function get ttl():int;
   }

   public final class ARecord extends ResourceRecord
   {
      public function get address():String;
   }

   public final class AAAARecord extends ResourceRecord
   {
      public function get address():String;
   }

   public final class MXRecord extends ResourceRecord
   {
   }

   public final class PTRRecord extends ResourceRecord
   {
   }

   public final class SRVRecord extends ResourceRecord
   {
   }
}
