// `flash.errors`, implemented in `src/natives/errors.rs`.
package flash.errors
{
   public class IllegalOperationError extends Error
   {
      public function IllegalOperationError(message:String = "", id:int = 0);
   }
}
