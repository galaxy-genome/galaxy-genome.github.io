// Flash's geometry classes, implemented in `src/natives/geom.rs`.
package flash.geom
{
   public class Point
   {
      public var x:Number;
      public var y:Number;
      public function Point(x:Number = 0, y:Number = 0);
      public function get length():Number;
      public function add(v:Point):Point;
      public function subtract(v:Point):Point;
      public function clone():Point;
      public function copyFrom(source:Point):void;
      public function equals(toCompare:Point):Boolean;
      public function normalize(thickness:Number):void;
      public function offset(dx:Number, dy:Number):void;
      public function setTo(x:Number, y:Number):void;
      public function toString():String;
      public static function distance(pt1:Point, pt2:Point):Number;
      public static function interpolate(pt1:Point, pt2:Point, f:Number):Point;
      public static function polar(len:Number, angle:Number):Point;
   }

   public class Rectangle
   {
      public var x:Number;
      public var y:Number;
      public var width:Number;
      public var height:Number;
      public function Rectangle(x:Number = 0, y:Number = 0, width:Number = 0, height:Number = 0);
      public function get left():Number;
      public function set left(value:Number):void;
      public function get right():Number;
      public function set right(value:Number):void;
      public function get top():Number;
      public function set top(value:Number):void;
      public function get bottom():Number;
      public function set bottom(value:Number):void;
      public function get topLeft():Point;
      public function get bottomRight():Point;
      public function get size():Point;
      public function clone():Rectangle;
      public function contains(x:Number, y:Number):Boolean;
      public function containsPoint(point:Point):Boolean;
      public function containsRect(rect:Rectangle):Boolean;
      public function copyFrom(sourceRect:Rectangle):void;
      public function equals(toCompare:Rectangle):Boolean;
      public function inflate(dx:Number, dy:Number):void;
      public function intersection(toIntersect:Rectangle):Rectangle;
      public function intersects(toIntersect:Rectangle):Boolean;
      public function isEmpty():Boolean;
      public function offset(dx:Number, dy:Number):void;
      public function setEmpty():void;
      public function setTo(x:Number, y:Number, width:Number, height:Number):void;
      public function toString():String;
      public function union(toUnion:Rectangle):Rectangle;
   }

   public class Matrix
   {
      public var a:Number;
      public var b:Number;
      public var c:Number;
      public var d:Number;
      public var tx:Number;
      public var ty:Number;
      public function Matrix(a:Number = 1, b:Number = 0, c:Number = 0, d:Number = 1, tx:Number = 0, ty:Number = 0);
      public function clone():Matrix;
      public function concat(m:Matrix):void;
      public function copyFrom(sourceMatrix:Matrix):void;
      public function createBox(scaleX:Number, scaleY:Number, rotation:Number = 0, tx:Number = 0, ty:Number = 0):void;
      public function deltaTransformPoint(point:Point):Point;
      public function identity():void;
      public function invert():void;
      public function rotate(angle:Number):void;
      public function scale(sx:Number, sy:Number):void;
      public function setTo(aa:Number, ba:Number, ca:Number, da:Number, txa:Number, tya:Number):void;
      public function transformPoint(point:Point):Point;
      public function translate(dx:Number, dy:Number):void;
   }

   public class Vector3D
   {
      public var x:Number;
      public var y:Number;
      public var z:Number;
      public var w:Number;
      public function Vector3D(x:Number = 0, y:Number = 0, z:Number = 0, w:Number = 0);
      public function get length():Number;
      public function get lengthSquared():Number;
      public function add(a:Vector3D):Vector3D;
      public function subtract(a:Vector3D):Vector3D;
      public function clone():Vector3D;
      public function copyFrom(sourceVector3D:Vector3D):void;
      public function crossProduct(a:Vector3D):Vector3D;
      public function dotProduct(a:Vector3D):Number;
      public function normalize():Number;
      public function scaleBy(s:Number):void;
      public function setTo(xa:Number, ya:Number, za:Number):void;
      public function project():void;
      public function equals(toCompare:Vector3D, allFour:Boolean = false):Boolean;
      public function nearEquals(toCompare:Vector3D, tolerance:Number, allFour:Boolean = false):Boolean;
      public function negate():void;
      public function incrementBy(a:Vector3D):void;
      public function decrementBy(a:Vector3D):void;
      public function toString():String;
      public static function distance(pt1:Vector3D, pt2:Vector3D):Number;
      public static function angleBetween(a:Vector3D, b:Vector3D):Number;
      public static const X_AXIS:Vector3D;
      public static const Y_AXIS:Vector3D;
      public static const Z_AXIS:Vector3D;
   }

   public class Matrix3D
   {
      public function Matrix3D(v:Vector.<Number> = null);
      public function get rawData():Vector.<Number>;
      public function set rawData(v:Vector.<Number>):void;
      public function append(lhs:Matrix3D):void;
      public function appendScale(xScale:Number, yScale:Number, zScale:Number):void;
      public function appendTranslation(x:Number, y:Number, z:Number):void;
      public function clone():Matrix3D;
      public function copyFrom(sourceMatrix3D:Matrix3D):void;
      public function copyRawDataFrom(vector:Vector.<Number>, index:uint = 0, transpose:Boolean = false):void;
      public function copyRawDataTo(vector:Vector.<Number>, index:uint = 0, transpose:Boolean = false):void;
      public function identity():void;
      public function invert():Boolean;
      public function prepend(rhs:Matrix3D):void;
      public function prependScale(xScale:Number, yScale:Number, zScale:Number):void;
      public function prependTranslation(x:Number, y:Number, z:Number):void;
      public function transformVector(v:Vector3D):Vector3D;
      public function deltaTransformVector(v:Vector3D):Vector3D;
      public function transpose():void;
      public function appendRotation(degrees:Number, axis:Vector3D, pivotPoint:Vector3D = null):void;
      public function prependRotation(degrees:Number, axis:Vector3D, pivotPoint:Vector3D = null):void;
      public function get position():Vector3D;
      public function set position(pos:Vector3D):void;
      public function get determinant():Number;
      public function copyColumnFrom(column:uint, vector3D:Vector3D):void;
      public function copyColumnTo(column:uint, vector3D:Vector3D):void;
      public function copyRowFrom(row:uint, vector3D:Vector3D):void;
      public function copyRowTo(row:uint, vector3D:Vector3D):void;
   }
}

package flash.geom
{
   public class ColorTransform
   {
      public var redMultiplier:Number;
      public var greenMultiplier:Number;
      public var blueMultiplier:Number;
      public var alphaMultiplier:Number;
      public var redOffset:Number;
      public var greenOffset:Number;
      public var blueOffset:Number;
      public var alphaOffset:Number;
      public function ColorTransform(redMultiplier:Number = 1.0, greenMultiplier:Number = 1.0, blueMultiplier:Number = 1.0, alphaMultiplier:Number = 1.0, redOffset:Number = 0, greenOffset:Number = 0, blueOffset:Number = 0, alphaOffset:Number = 0);
      public function get color():uint;
      public function set color(value:uint):void;
      public function concat(second:ColorTransform):void;
   }
   public class Transform
   {
      public function get matrix():Matrix;
      public function set matrix(value:Matrix):void;
      public function get concatenatedMatrix():Matrix;
      public function get colorTransform():ColorTransform;
      public function set colorTransform(value:ColorTransform):void;
      public function get pixelBounds():Rectangle;
   }
}
