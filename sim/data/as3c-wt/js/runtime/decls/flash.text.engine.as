// `flash.text.engine`, as far as Feathers' text renderers use it,
// implemented in `src/natives/text_events.rs`.
package flash.text.engine
{
   public final class FontDescription
   {
      public var fontName:String;
      public var fontWeight:String;
      public var fontPosture:String;
      public var fontLookup:String;
      public var renderingMode:String;
      public var cffHinting:String;
      public var locked:Boolean;
      public function FontDescription(fontName:String = "_serif", fontWeight:String = "normal", fontPosture:String = "normal", fontLookup:String = "device", renderingMode:String = "cff", cffHinting:String = "horizontalStem");
      public function clone():FontDescription;
   }

   public final class ElementFormat
   {
      public var fontDescription:FontDescription;
      public var fontSize:Number;
      public var color:uint;
      public var alpha:Number;
      public var textRotation:String;
      public var dominantBaseline:String;
      public var alignmentBaseline:String;
      public var baselineShift:Number;
      public var kerning:String;
      public var trackingRight:Number;
      public var trackingLeft:Number;
      public var locale:String;
      public var breakOpportunity:String;
      public var digitCase:String;
      public var digitWidth:String;
      public var ligatureLevel:String;
      public var typographicCase:String;
      public var locked:Boolean;
      public function ElementFormat(fontDescription:FontDescription = null, fontSize:Number = 12.0, color:uint = 0x000000, alpha:Number = 1.0, textRotation:String = "auto", dominantBaseline:String = "roman", alignmentBaseline:String = "useDominantBaseline", baselineShift:Number = 0.0, kerning:String = "on", trackingRight:Number = 0.0, trackingLeft:Number = 0.0, locale:String = "en", breakOpportunity:String = "auto", digitCase:String = "default", digitWidth:String = "default", ligatureLevel:String = "common", typographicCase:String = "default");
      public function clone():ElementFormat;
   }

   public class ContentElement
   {
      public var elementFormat:ElementFormat;
      public var userData:*;
      public function ContentElement(elementFormat:ElementFormat = null, eventMirror:EventDispatcher = null, textRotation:String = "rotate0");
      public function get text():String;
      public function get rawText():String;
      public function get textBlock():TextBlock;
   }

   public final class TextElement extends ContentElement
   {
      public function TextElement(text:String = null, elementFormat:ElementFormat = null, eventMirror:EventDispatcher = null, textRotation:String = "rotate0");
      public function set text(value:String):void;
      public function replaceText(beginIndex:int, endIndex:int, newText:String):void;
   }

   public class TextJustifier
   {
      public var lineJustification:String;
      public function TextJustifier(locale:String, lineJustification:String);
      public function get locale():String;
      public function clone():TextJustifier;
   }

   public final class SpaceJustifier extends TextJustifier
   {
      public var letterSpacing:Boolean;
      public function SpaceJustifier(locale:String = "en", lineJustification:String = "unjustified", letterSpacing:Boolean = false);
   }

   public final class TabStop
   {
      public var alignment:String;
      public var position:Number;
      public var decimalAlignmentToken:String;
      public function TabStop(alignment:String = "start", position:Number = 0.0, decimalAlignmentToken:String = "");
   }

   public final class TypographicCase
   {
      public static const CAPS:String = "caps";
      public static const CAPS_AND_SMALL_CAPS:String = "capsAndSmallCaps";
      public static const DEFAULT:String = "default";
      public static const LOWERCASE:String = "lowercase";
      public static const SMALL_CAPS:String = "smallCaps";
      public static const TITLE:String = "title";
      public static const UPPERCASE:String = "uppercase";
   }

   public final class TextBlock
   {
      public var tabStops:Vector.<TabStop>;
      public var textJustifier:TextJustifier;
      public var lineRotation:String;
      public var baselineZero:String;
      public var bidiLevel:int;
      public var applyNonLinearFontScaling:Boolean;
      public var baselineFontDescription:FontDescription;
      public var baselineFontSize:Number;
      public var userData:*;
      public function TextBlock(content:ContentElement = null, tabStops:Vector.<TabStop> = null, textJustifier:TextJustifier = null, lineRotation:String = "rotate0", baselineZero:String = "roman", bidiLevel:int = 0, applyNonLinearFontScaling:Boolean = true, baselineFontDescription:FontDescription = null, baselineFontSize:Number = 12.0);
      public function get content():ContentElement;
      public function set content(value:ContentElement):void;
      public function get firstLine():TextLine;
      public function get lastLine():TextLine;
      public function createTextLine(previousLine:TextLine = null, width:Number = 1000000, lineOffset:Number = 0.0, fitSomething:Boolean = false):TextLine;
      public function recreateTextLine(textLine:TextLine, previousLine:TextLine = null, width:Number = 1000000, lineOffset:Number = 0.0, fitSomething:Boolean = false):TextLine;
      public function releaseLines(firstLine:TextLine, lastLine:TextLine):void;
   }

   public final class TextLine extends DisplayObjectContainer
   {
      public static const MAX_LINE_WIDTH:int = 1000000;
      public var userData:*;
      public function TextLine();
      public function get ascent():Number;
      public function get descent():Number;
      public function get totalAscent():Number;
      public function get totalDescent():Number;
      public function get totalHeight():Number;
      public function get textWidth():Number;
      public function get textHeight():Number;
      public function get unjustifiedTextWidth():Number;
      public function get width():Number;
      public function get rawTextLength():int;
      public function get textBlockBeginIndex():int;
      public function get atomCount():int;
      public function get textBlock():TextBlock;
      public function get previousLine():TextLine;
      public function get nextLine():TextLine;
      public function get validity():String;
      public function getAtomBounds(atomIndex:int):Rectangle;
      public function getAtomIndexAtCharIndex(charIndex:int):int;
      public function getAtomIndexAtPoint(stageX:Number, stageY:Number):int;
      public function getAtomTextBlockBeginIndex(atomIndex:int):int;
      public function getAtomTextBlockEndIndex(atomIndex:int):int;
      public function getBaselinePosition(baseline:String):Number;
   }
}
