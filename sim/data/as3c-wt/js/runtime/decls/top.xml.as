// Flash's top-level E4X classes, implemented in `src/natives/toplevel.rs`.
// `x.name` is `child("name")`, `x.@name` is `attribute("name")`, and
// `for each` walks `XMLList::items`.
package
{
   public final dynamic class XML
   {
      public function XML(value:Object = null);
      public function attribute(attributeName:*):XMLList;
      public function attributes():XMLList;
      public function child(propertyName:Object):XMLList;
      public function children():XMLList;
      public function elements(name:Object = "*"):XMLList;
      public function descendants(name:Object = "*"):XMLList;
      public function text():XMLList;
      public function length():int;
      public function localName():Object;
      public function name():Object;
      public function toString():String;
      public function toXMLString():String;
   }

   public final dynamic class XMLList
   {
      public function XMLList(value:Object = null);
      public function attribute(attributeName:*):XMLList;
      public function attributes():XMLList;
      public function child(propertyName:Object):XMLList;
      public function children():XMLList;
      public function elements(name:Object = "*"):XMLList;
      public function descendants(name:Object = "*"):XMLList;
      public function text():XMLList;
      public function length():int;
      public function copy():XMLList;
      // E4X `list.(expr)`: `f` takes each item as an XML and answers whether to keep it.
      public function filter(f:Function):XMLList;
      public function toString():String;
      public function toXMLString():String;
   }
}
