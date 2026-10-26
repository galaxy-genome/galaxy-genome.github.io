// `flash.text`, implemented in `src/natives/text_events.rs`.
package flash.text
{
   public class TextField extends InteractiveObject
   {
      public function TextField();
      public function get text():String;
      public function set text(value:String):void;
      public function get htmlText():String;
      public function set htmlText(value:String):void;
      public function get length():int;
      public function get width():Number;
      public function set width(value:Number):void;
      public function get height():Number;
      public function set height(value:Number):void;
      public function get textWidth():Number;
      public function get textHeight():Number;
      public function get numLines():int;
      public function get maxScrollV():int;
      public function get scrollV():int;
      public function set scrollV(value:int):void;
      public function get scrollH():int;
      public function set scrollH(value:int):void;
      public function get defaultTextFormat():TextFormat;
      public function set defaultTextFormat(format:TextFormat):void;
      public function get styleSheet():StyleSheet;
      public function set styleSheet(value:StyleSheet):void;
      public function get autoSize():String;
      public function set autoSize(value:String):void;
      public function get type():String;
      public function set type(value:String):void;
      public function get wordWrap():Boolean;
      public function set wordWrap(value:Boolean):void;
      public function get multiline():Boolean;
      public function set multiline(value:Boolean):void;
      public function get selectable():Boolean;
      public function set selectable(value:Boolean):void;
      public function get embedFonts():Boolean;
      public function set embedFonts(value:Boolean):void;
      public function get displayAsPassword():Boolean;
      public function set displayAsPassword(value:Boolean):void;
      public function get maxChars():int;
      public function set maxChars(value:int):void;
      public function get restrict():String;
      public function set restrict(value:String):void;
      public function get antiAliasType():String;
      public function set antiAliasType(value:String):void;
      public function get gridFitType():String;
      public function set gridFitType(value:String):void;
      public function get sharpness():Number;
      public function set sharpness(value:Number):void;
      public function get thickness():Number;
      public function set thickness(value:Number):void;
      public function get background():Boolean;
      public function set background(value:Boolean):void;
      public function get backgroundColor():uint;
      public function set backgroundColor(value:uint):void;
      public function get border():Boolean;
      public function set border(value:Boolean):void;
      public function get borderColor():uint;
      public function set borderColor(value:uint):void;
      public function get textColor():uint;
      public function set textColor(value:uint):void;
      public function get condenseWhite():Boolean;
      public function set condenseWhite(value:Boolean):void;
      public function get alwaysShowSelection():Boolean;
      public function set alwaysShowSelection(value:Boolean):void;
      public function get mouseWheelEnabled():Boolean;
      public function set mouseWheelEnabled(value:Boolean):void;
      public function get selectionBeginIndex():int;
      public function get selectionEndIndex():int;
      public function get caretIndex():int;
      public function appendText(newText:String):void;
      public function replaceText(beginIndex:int, endIndex:int, newText:String):void;
      public function replaceSelectedText(value:String):void;
      public function setSelection(beginIndex:int, endIndex:int):void;
      public function getTextFormat(beginIndex:int = -1, endIndex:int = -1):TextFormat;
      public function setTextFormat(format:TextFormat, beginIndex:int = -1, endIndex:int = -1):void;
      public function getLineMetrics(lineIndex:int):TextLineMetrics;
      public function getLineLength(lineIndex:int):int;
      public function getLineOffset(lineIndex:int):int;
      public function getLineText(lineIndex:int):String;
      public function getLineIndexAtPoint(x:Number, y:Number):int;
      public function getLineIndexOfChar(charIndex:int):int;
      public function getCharIndexAtPoint(x:Number, y:Number):int;
      public function getCharBoundaries(charIndex:int):Rectangle;
   }

   public class TextFormat
   {
      public var align:String;
      public var blockIndent:Object;
      public var bold:Object;
      public var bullet:Object;
      public var color:Object;
      public var display:String;
      public var font:String;
      public var indent:Object;
      public var italic:Object;
      public var kerning:Object;
      public var leading:Object;
      public var leftMargin:Object;
      public var letterSpacing:Object;
      public var rightMargin:Object;
      public var size:Object;
      public var tabStops:Array;
      public var target:String;
      public var underline:Object;
      public var url:String;
      public function TextFormat(font:String = null, size:Object = null, color:Object = null, bold:Object = null, italic:Object = null, underline:Object = null, url:String = null, target:String = null, align:String = null, leftMargin:Object = null, rightMargin:Object = null, indent:Object = null, leading:Object = null);
   }

   public class TextLineMetrics
   {
      public var x:Number;
      public var width:Number;
      public var height:Number;
      public var ascent:Number;
      public var descent:Number;
      public var leading:Number;
      public function TextLineMetrics(x:Number, width:Number, height:Number, ascent:Number, descent:Number, leading:Number);
   }

   public class StyleSheet extends EventDispatcher
   {
      public function StyleSheet();
      public function get styleNames():Array;
      public function clear():void;
      public function getStyle(styleName:String):Object;
      public function setStyle(styleName:String, styleObject:Object):void;
      public function parseCSS(CSSText:String):void;
   }

   public class Font
   {
      public function Font();
      public function get fontName():String;
      public function get fontStyle():String;
      public function get fontType():String;
      public function hasGlyphs(str:String):Boolean;
      public static function enumerateFonts(enumerateDeviceFonts:Boolean = false):Array;
      public static function registerFont(font:Class):void;
   }

   public final class TextFieldAutoSize
   {
      public static const CENTER:String = "center";
      public static const LEFT:String = "left";
      public static const NONE:String = "none";
      public static const RIGHT:String = "right";
   }

   public final class TextFieldType
   {
      public static const DYNAMIC:String = "dynamic";
      public static const INPUT:String = "input";
   }

   public final class TextFormatAlign
   {
      public static const CENTER:String = "center";
      public static const END:String = "end";
      public static const JUSTIFY:String = "justify";
      public static const LEFT:String = "left";
      public static const RIGHT:String = "right";
      public static const START:String = "start";
   }

   public final class AntiAliasType
   {
      public static const ADVANCED:String = "advanced";
      public static const NORMAL:String = "normal";
   }

   public final class GridFitType
   {
      public static const NONE:String = "none";
      public static const PIXEL:String = "pixel";
      public static const SUBPIXEL:String = "subpixel";
   }
}
