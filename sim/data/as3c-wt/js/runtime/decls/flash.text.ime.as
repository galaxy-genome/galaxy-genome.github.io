// `flash.text.ime`, implemented in `src/natives/text_events.rs`.
package flash.text.ime
{
   public interface IIMEClient
   {
      function get compositionStartIndex():int;
      function get compositionEndIndex():int;
      function get verticalTextLayout():Boolean;
      function get selectionAnchorIndex():int;
      function get selectionActiveIndex():int;
      function updateComposition(text:String, attributes:Vector.<CompositionAttributeRange>, compositionStartIndex:int, compositionEndIndex:int):void;
      function confirmComposition(text:String = null, preserveSelection:Boolean = false):void;
      function getTextBounds(startIndex:int, endIndex:int):Rectangle;
      function selectRange(anchorIndex:int, activeIndex:int):void;
      function getTextInRange(startIndex:int, endIndex:int):String;
   }

   public final class CompositionAttributeRange
   {
      public var relativeStart:int;
      public var relativeEnd:int;
      public var selected:Boolean;
      public var converted:Boolean;
      public function CompositionAttributeRange(relativeStart:int, relativeEnd:int, selected:Boolean, converted:Boolean);
   }
}
