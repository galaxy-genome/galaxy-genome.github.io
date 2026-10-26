// Flash's display list, implemented in `src/natives/display.rs`.
package flash.display
{
   import flash.display3D.Context3D;
   import flash.events.EventDispatcher;
   import flash.geom.Matrix;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.geom.ColorTransform;
   import flash.geom.Transform;
   import flash.net.URLRequest;
   import flash.system.LoaderContext;
   import flash.system.ApplicationDomain;
   import flash.utils.ByteArray;

   public interface IBitmapDrawable
   {
   }

   public class DisplayObject extends EventDispatcher implements IBitmapDrawable
   {
      public function get x():Number;
      public function set x(value:Number):void;
      public function get y():Number;
      public function set y(value:Number):void;
      public function get z():Number;
      public function set z(value:Number):void;
      public function get width():Number;
      public function set width(value:Number):void;
      public function get height():Number;
      public function set height(value:Number):void;
      public function get scaleX():Number;
      public function set scaleX(value:Number):void;
      public function get scaleY():Number;
      public function set scaleY(value:Number):void;
      public function get rotation():Number;
      public function set rotation(value:Number):void;
      public function get alpha():Number;
      public function set alpha(value:Number):void;
      public function get visible():Boolean;
      public function set visible(value:Boolean):void;
      public function get name():String;
      public function set name(value:String):void;
      public function get blendMode():String;
      public function set blendMode(value:String):void;
      public function get cacheAsBitmap():Boolean;
      public function set cacheAsBitmap(value:Boolean):void;
      public function get filters():Array;
      public function set filters(value:Array):void;
      public function get mask():DisplayObject;
      public function set mask(value:DisplayObject):void;
      public function get scrollRect():Rectangle;
      public function set scrollRect(value:Rectangle):void;
      public function get scale9Grid():Rectangle;
      public function set scale9Grid(value:Rectangle):void;
      public function get transform():Transform;
      public function set transform(value:Transform):void;
      public function get parent():DisplayObjectContainer;
      public function get stage():Stage;
      public function get root():DisplayObject;
      public function get loaderInfo():LoaderInfo;
      public function get mouseX():Number;
      public function get mouseY():Number;
      public function getBounds(targetCoordinateSpace:DisplayObject):Rectangle;
      public function getRect(targetCoordinateSpace:DisplayObject):Rectangle;
      public function localToGlobal(point:Point):Point;
      public function globalToLocal(point:Point):Point;
      public function hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean;
      public function hitTestObject(obj:DisplayObject):Boolean;
   }

   public class InteractiveObject extends DisplayObject
   {
      public function InteractiveObject();
      public function get mouseEnabled():Boolean;
      public function set mouseEnabled(value:Boolean):void;
      public function get doubleClickEnabled():Boolean;
      public function set doubleClickEnabled(value:Boolean):void;
      public function get tabEnabled():Boolean;
      public function set tabEnabled(value:Boolean):void;
      public function get tabIndex():int;
      public function set tabIndex(value:int):void;
      public function get focusRect():Object;
      public function set focusRect(value:Object):void;
      public function get needsSoftKeyboard():Boolean;
      public function set needsSoftKeyboard(value:Boolean):void;
      public function requestSoftKeyboard():Boolean;
   }

   public class DisplayObjectContainer extends InteractiveObject
   {
      public function DisplayObjectContainer();
      public function get numChildren():int;
      public function get mouseChildren():Boolean;
      public function set mouseChildren(value:Boolean):void;
      public function get tabChildren():Boolean;
      public function set tabChildren(value:Boolean):void;
      public function addChild(child:DisplayObject):DisplayObject;
      public function addChildAt(child:DisplayObject, index:int):DisplayObject;
      public function removeChild(child:DisplayObject):DisplayObject;
      public function removeChildAt(index:int):DisplayObject;
      public function removeChildren(beginIndex:int = 0, endIndex:int = 2147483647):void;
      public function getChildAt(index:int):DisplayObject;
      public function getChildByName(name:String):DisplayObject;
      public function getChildIndex(child:DisplayObject):int;
      public function setChildIndex(child:DisplayObject, index:int):void;
      public function swapChildren(child1:DisplayObject, child2:DisplayObject):void;
      public function swapChildrenAt(index1:int, index2:int):void;
      public function contains(child:DisplayObject):Boolean;
   }

   public class Sprite extends DisplayObjectContainer
   {
      public function Sprite();
      public function get graphics():Graphics;
      public function get buttonMode():Boolean;
      public function set buttonMode(value:Boolean):void;
      public function get useHandCursor():Boolean;
      public function set useHandCursor(value:Boolean):void;
      public function get hitArea():Sprite;
      public function set hitArea(value:Sprite):void;
      public function startDrag(lockCenter:Boolean = false, bounds:Rectangle = null):void;
      public function stopDrag():void;
   }

   public class Shape extends DisplayObject
   {
      public function Shape();
      public function get graphics():Graphics;
   }

   public final class Graphics
   {
      public function Graphics();
      public function beginFill(color:uint, alpha:Number = 1.0):void;
      public function endFill():void;
      public function lineStyle(thickness:Number = NaN, color:uint = 0, alpha:Number = 1.0, pixelHinting:Boolean = false, scaleMode:String = "normal", caps:String = null, joints:String = null, miterLimit:Number = 3):void;
      public function moveTo(x:Number, y:Number):void;
      public function lineTo(x:Number, y:Number):void;
      public function drawRect(x:Number, y:Number, width:Number, height:Number):void;
      public function drawCircle(x:Number, y:Number, radius:Number):void;
      public function clear():void;
   }

   public class Bitmap extends DisplayObject
   {
      public function Bitmap(bitmapData:BitmapData = null, pixelSnapping:String = "auto", smoothing:Boolean = false);
      public function get bitmapData():BitmapData;
      public function set bitmapData(value:BitmapData):void;
      public function get pixelSnapping():String;
      public function set pixelSnapping(value:String):void;
      public function get smoothing():Boolean;
      public function set smoothing(value:Boolean):void;
   }

   public class BitmapData implements IBitmapDrawable
   {
      public function BitmapData(width:int, height:int, transparent:Boolean = true, fillColor:uint = 0xFFFFFFFF);
      public function get width():int;
      public function get height():int;
      public function get transparent():Boolean;
      public function get rect():Rectangle;
      public function getPixel(x:int, y:int):uint;
      public function getPixel32(x:int, y:int):uint;
      public function setPixel(x:int, y:int, color:uint):void;
      public function setPixel32(x:int, y:int, color:uint):void;
      public function fillRect(rect:Rectangle, color:uint):void;
      public function copyPixels(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, alphaBitmapData:BitmapData = null, alphaPoint:Point = null, mergeAlpha:Boolean = false):void;
      public function draw(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Boolean = false):void;
      public function noise(randomSeed:int, low:uint = 0, high:uint = 255, channelOptions:uint = 7, grayScale:Boolean = false):void;
      public function perlinNoise(baseX:Number, baseY:Number, numOctaves:uint, randomSeed:int, stitch:Boolean, fractalNoise:Boolean, channelOptions:uint = 7, grayScale:Boolean = false, offsets:Array = null):void;
      public function getVector(rect:Rectangle):Vector.<uint>;
      public function setVector(rect:Rectangle, inputVector:Vector.<uint>):void;
      public function setPixels(rect:Rectangle, inputByteArray:ByteArray):void;
      public function clone():BitmapData;
      public function lock():void;
      public function unlock(changeRect:Rectangle = null):void;
      public function dispose():void;
   }

   public class Stage extends DisplayObjectContainer
   {
      public function get stageWidth():int;
      public function set stageWidth(value:int):void;
      public function get stageHeight():int;
      public function set stageHeight(value:int):void;
      public function get fullScreenWidth():uint;
      public function get fullScreenHeight():uint;
      public function get frameRate():Number;
      public function set frameRate(value:Number):void;
      public function get scaleMode():String;
      public function set scaleMode(value:String):void;
      public function get align():String;
      public function set align(value:String):void;
      public function get quality():String;
      public function set quality(value:String):void;
      public function get displayState():String;
      public function set displayState(value:String):void;
      public function get color():uint;
      public function set color(value:uint):void;
      public function get focus():InteractiveObject;
      public function set focus(value:InteractiveObject):void;
      public function get stage3Ds():Vector.<Stage3D>;
      public function get contentsScaleFactor():Number;
      public function get browserZoomFactor():Number;
      public function get vsyncEnabled():Boolean;
      public function set vsyncEnabled(value:Boolean):void;
      public function invalidate():void;
   }

   public class Stage3D extends EventDispatcher
   {
      public function get x():Number;
      public function set x(value:Number):void;
      public function get y():Number;
      public function set y(value:Number):void;
      public function get visible():Boolean;
      public function set visible(value:Boolean):void;
      public function get context3D():Context3D;
      public function requestContext3D(context3DRenderMode:String = "auto", profile:String = "baseline"):void;
      public function requestContext3DMatchingProfiles(profiles:Vector.<String>):void;
   }

   public class Loader extends DisplayObjectContainer
   {
      public function Loader();
      public function get content():DisplayObject;
      public function get contentLoaderInfo():LoaderInfo;
      public function load(request:URLRequest, context:LoaderContext = null):void;
      public function loadBytes(bytes:ByteArray, context:LoaderContext = null):void;
      public function close():void;
      public function unload():void;
   }

   public class LoaderInfo extends EventDispatcher
   {
      public function get loader():Loader;
      public function get content():DisplayObject;
      public function get url():String;
      public function get bytesLoaded():uint;
      public function get bytesTotal():uint;
      public function get width():int;
      public function get height():int;
      public function get contentType():String;
      public function get applicationDomain():ApplicationDomain;
   }

   public final class StageScaleMode
   {
      public static const EXACT_FIT:String = "exactFit";
      public static const NO_BORDER:String = "noBorder";
      public static const NO_SCALE:String = "noScale";
      public static const SHOW_ALL:String = "showAll";
   }

   public final class StageAlign
   {
      public static const BOTTOM:String = "B";
      public static const BOTTOM_LEFT:String = "BL";
      public static const BOTTOM_RIGHT:String = "BR";
      public static const LEFT:String = "L";
      public static const RIGHT:String = "R";
      public static const TOP:String = "T";
      public static const TOP_LEFT:String = "TL";
      public static const TOP_RIGHT:String = "TR";
   }

   public final class StageQuality
   {
      public static const BEST:String = "best";
      public static const HIGH:String = "high";
      public static const HIGH_16X16:String = "16x16";
      public static const HIGH_16X16_LINEAR:String = "16x16linear";
      public static const HIGH_8X8:String = "8x8";
      public static const HIGH_8X8_LINEAR:String = "8x8linear";
      public static const LOW:String = "low";
      public static const MEDIUM:String = "medium";
   }

   public final class StageDisplayState
   {
      public static const FULL_SCREEN:String = "fullScreen";
      public static const FULL_SCREEN_INTERACTIVE:String = "fullScreenInteractive";
      public static const NORMAL:String = "normal";
   }

   public final class BlendMode
   {
      public static const ADD:String = "add";
      public static const ALPHA:String = "alpha";
      public static const DARKEN:String = "darken";
      public static const DIFFERENCE:String = "difference";
      public static const ERASE:String = "erase";
      public static const HARDLIGHT:String = "hardlight";
      public static const INVERT:String = "invert";
      public static const LAYER:String = "layer";
      public static const LIGHTEN:String = "lighten";
      public static const MULTIPLY:String = "multiply";
      public static const NORMAL:String = "normal";
      public static const OVERLAY:String = "overlay";
      public static const SCREEN:String = "screen";
      public static const SHADER:String = "shader";
      public static const SUBTRACT:String = "subtract";
   }

   public final class BitmapDataChannel
   {
      public static const ALPHA:uint = 8;
      public static const BLUE:uint = 4;
      public static const GREEN:uint = 2;
      public static const RED:uint = 1;
   }
}

package flash.display
{
   public dynamic class MovieClip extends Sprite
   {
      public function MovieClip();
      public function get currentFrame():int;
      public function get totalFrames():int;
      public function gotoAndStop(frame:Object, scene:String = null):void;
      public function gotoAndPlay(frame:Object, scene:String = null):void;
      public function stop():void;
      public function play():void;
   }
}
