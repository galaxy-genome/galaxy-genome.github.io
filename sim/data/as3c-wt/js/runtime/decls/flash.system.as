// `flash.system` classes, implemented in `src/natives/utils2.rs`.
package flash.system
{
   public class ApplicationDomain
   {
      public function ApplicationDomain(parentDomain:ApplicationDomain = null);
      public static function get currentDomain():ApplicationDomain;
      public function get parentDomain():ApplicationDomain;
      public function hasDefinition(name:String):Boolean;
      public function getDefinition(name:String):Object;
   }
}
