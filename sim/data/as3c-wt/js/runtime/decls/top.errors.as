// Flash's top-level error classes, implemented in `src/natives/errors.rs`.
package
{
   public class Error
   {
      public var message:String;
      public var name:String;
      public function Error(message:String = "", id:int = 0);
      public function get errorID():int;
      public function getStackTrace():String;
      public function toString():String;
   }

   public class ArgumentError extends Error
   {
      public function ArgumentError(message:String = "", id:int = 0);
   }

   public class RangeError extends Error
   {
      public function RangeError(message:String = "", id:int = 0);
   }

   public class TypeError extends Error
   {
      public function TypeError(message:String = "", id:int = 0);
   }
}
