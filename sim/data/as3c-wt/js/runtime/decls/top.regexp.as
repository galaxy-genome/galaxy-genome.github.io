// Flash's top-level `RegExp`, implemented in `src/natives/toplevel.rs`.
// `String.match`, `replace`, `search` and `split` with a RegExp argument
// are `RegExp::string_match`, `string_replace`, `string_search` and
// `string_split` there.
package
{
   public dynamic class RegExp
   {
      public function RegExp(re:String = "", flags:String = "");
      public function get source():String;
      public function get global():Boolean;
      public function get ignoreCase():Boolean;
      public function get multiline():Boolean;
      public function get dotall():Boolean;
      public function get extended():Boolean;
      public function get lastIndex():Number;
      public function set lastIndex(value:Number):void;
      public function exec(str:String = ""):Object;
      public function test(str:String = ""):Boolean;
      public function toString():String;
   }
}
