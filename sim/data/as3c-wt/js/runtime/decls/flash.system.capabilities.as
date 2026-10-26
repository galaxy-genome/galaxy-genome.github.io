// `flash.system`, implemented in `src/natives/system.rs`.
package flash.system
{
   public final class Capabilities
   {
      public static function get isDebugger():Boolean;
      public static function get language():String;
      public static function get os():String;
      public static function get pixelAspectRatio():Number;
      public static function get playerType():String;
      public static function get screenDPI():Number;
      public static function get screenResolutionX():Number;
      public static function get screenResolutionY():Number;
      public static function get serverString():String;
      public static function get version():String;
   }

   public final class System
   {
      public static function get totalMemory():uint;
      public static function get freeMemory():Number;
      public static function gc():void;
      public static function disposeXML(node:XML):void;
   }

   public final class Security
   {
      public static const REMOTE:String = "remote";
      public static function get sandboxType():String;
   }

   public class SecurityDomain
   {
   }

   public class LoaderContext
   {
      public var checkPolicyFile:Boolean;
      public var applicationDomain:ApplicationDomain;
      public var securityDomain:SecurityDomain;
      public var imageDecodingPolicy:String;
      public function LoaderContext(checkPolicyFile:Boolean = false, applicationDomain:ApplicationDomain = null, securityDomain:SecurityDomain = null);
   }
}
