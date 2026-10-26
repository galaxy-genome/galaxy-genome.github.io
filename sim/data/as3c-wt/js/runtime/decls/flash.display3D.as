// Flash's Stage3D classes, implemented in `src/natives/display3d.rs`.
package flash.display3D
{
   public final class Context3DBlendFactor
   {
      public static const DESTINATION_ALPHA:String = "destinationAlpha";
      public static const DESTINATION_COLOR:String = "destinationColor";
      public static const ONE:String = "one";
      public static const ONE_MINUS_DESTINATION_ALPHA:String = "oneMinusDestinationAlpha";
      public static const ONE_MINUS_DESTINATION_COLOR:String = "oneMinusDestinationColor";
      public static const ONE_MINUS_SOURCE_ALPHA:String = "oneMinusSourceAlpha";
      public static const ONE_MINUS_SOURCE_COLOR:String = "oneMinusSourceColor";
      public static const SOURCE_ALPHA:String = "sourceAlpha";
      public static const SOURCE_COLOR:String = "sourceColor";
      public static const ZERO:String = "zero";
   }

   public final class Context3DBufferUsage
   {
      public static const DYNAMIC_DRAW:String = "dynamicDraw";
      public static const STATIC_DRAW:String = "staticDraw";
   }

   public final class Context3DClearMask
   {
      public static const ALL:int = 7;
      public static const COLOR:int = 1;
      public static const DEPTH:int = 2;
      public static const STENCIL:int = 4;
   }

   public final class Context3DCompareMode
   {
      public static const ALWAYS:String = "always";
      public static const EQUAL:String = "equal";
      public static const GREATER:String = "greater";
      public static const GREATER_EQUAL:String = "greaterEqual";
      public static const LESS:String = "less";
      public static const LESS_EQUAL:String = "lessEqual";
      public static const NEVER:String = "never";
      public static const NOT_EQUAL:String = "notEqual";
   }

   public final class Context3DMipFilter
   {
      public static const MIPLINEAR:String = "miplinear";
      public static const MIPNEAREST:String = "mipnearest";
      public static const MIPNONE:String = "mipnone";
   }

   public final class Context3DProfile
   {
      public static const BASELINE:String = "baseline";
      public static const BASELINE_CONSTRAINED:String = "baselineConstrained";
      public static const BASELINE_EXTENDED:String = "baselineExtended";
      public static const STANDARD:String = "standard";
      public static const STANDARD_CONSTRAINED:String = "standardConstrained";
      public static const STANDARD_EXTENDED:String = "standardExtended";
   }

   public final class Context3DProgramType
   {
      public static const FRAGMENT:String = "fragment";
      public static const VERTEX:String = "vertex";
   }

   public final class Context3DRenderMode
   {
      public static const AUTO:String = "auto";
      public static const SOFTWARE:String = "software";
   }

   public final class Context3DStencilAction
   {
      public static const DECREMENT_SATURATE:String = "decrementSaturate";
      public static const DECREMENT_WRAP:String = "decrementWrap";
      public static const INCREMENT_SATURATE:String = "incrementSaturate";
      public static const INCREMENT_WRAP:String = "incrementWrap";
      public static const INVERT:String = "invert";
      public static const KEEP:String = "keep";
      public static const SET:String = "set";
      public static const ZERO:String = "zero";
   }

   public final class Context3DTextureFilter
   {
      public static const ANISOTROPIC16X:String = "anisotropic16x";
      public static const ANISOTROPIC2X:String = "anisotropic2x";
      public static const ANISOTROPIC4X:String = "anisotropic4x";
      public static const ANISOTROPIC8X:String = "anisotropic8x";
      public static const LINEAR:String = "linear";
      public static const NEAREST:String = "nearest";
   }

   public final class Context3DTextureFormat
   {
      public static const BGRA:String = "bgra";
      public static const BGRA_PACKED:String = "bgraPacked4444";
      public static const BGR_PACKED:String = "bgrPacked565";
      public static const COMPRESSED:String = "compressed";
      public static const COMPRESSED_ALPHA:String = "compressedAlpha";
      public static const RGBA_HALF_FLOAT:String = "rgbaHalfFloat";
   }

   public final class Context3DTriangleFace
   {
      public static const BACK:String = "back";
      public static const FRONT:String = "front";
      public static const FRONT_AND_BACK:String = "frontAndBack";
      public static const NONE:String = "none";
   }

   public final class Context3DVertexBufferFormat
   {
      public static const BYTES_4:String = "bytes4";
      public static const FLOAT_1:String = "float1";
      public static const FLOAT_2:String = "float2";
      public static const FLOAT_3:String = "float3";
      public static const FLOAT_4:String = "float4";
   }

   public final class Context3DWrapMode
   {
      public static const CLAMP:String = "clamp";
      public static const CLAMP_U_REPEAT_V:String = "clamp_u_repeat_v";
      public static const REPEAT:String = "repeat";
      public static const REPEAT_U_CLAMP_V:String = "repeat_u_clamp_v";
   }

   public final class Context3D extends flash.events.EventDispatcher
   {
      public static function get supportsVideoTexture():Boolean;
      public function get backBufferWidth():int;
      public function get backBufferHeight():int;
      public function get maxBackBufferWidth():int;
      public function set maxBackBufferWidth(value:int):void;
      public function get maxBackBufferHeight():int;
      public function set maxBackBufferHeight(value:int):void;
      public function get driverInfo():String;
      public function get enableErrorChecking():Boolean;
      public function set enableErrorChecking(value:Boolean):void;
      public function get profile():String;
      public function get totalGPUMemory():Number;
      public function clear(red:Number = 0, green:Number = 0, blue:Number = 0, alpha:Number = 1, depth:Number = 1, stencil:uint = 0, mask:uint = 0xffffffff):void;
      public function configureBackBuffer(width:int, height:int, antiAlias:int, enableDepthAndStencil:Boolean = true, wantsBestResolution:Boolean = false, wantsBestResolutionOnBrowserZoom:Boolean = false):void;
      public function createCubeTexture(size:int, format:String, optimizeForRenderToTexture:Boolean, streamingLevels:int = 0):flash.display3D.textures.CubeTexture;
      public function createIndexBuffer(numIndices:int, bufferUsage:String = "staticDraw"):IndexBuffer3D;
      public function createProgram():Program3D;
      public function createRectangleTexture(width:int, height:int, format:String, optimizeForRenderToTexture:Boolean):flash.display3D.textures.RectangleTexture;
      public function createTexture(width:int, height:int, format:String, optimizeForRenderToTexture:Boolean, streamingLevels:int = 0):flash.display3D.textures.Texture;
      public function createVertexBuffer(numVertices:int, data32PerVertex:int, bufferUsage:String = "staticDraw"):VertexBuffer3D;
      public function createVideoTexture():flash.display3D.textures.VideoTexture;
      public function dispose(recreate:Boolean = true):void;
      public function drawToBitmapData(destination:flash.display.BitmapData):void;
      public function drawTriangles(indexBuffer:IndexBuffer3D, firstIndex:int = 0, numTriangles:int = -1):void;
      public function present():void;
      public function setBlendFactors(sourceFactor:String, destinationFactor:String):void;
      public function setColorMask(red:Boolean, green:Boolean, blue:Boolean, alpha:Boolean):void;
      public function setCulling(triangleFaceToCull:String):void;
      public function setDepthTest(depthMask:Boolean, passCompareMode:String):void;
      public function setProgram(program:Program3D):void;
      public function setProgramConstantsFromByteArray(programType:String, firstRegister:int, numRegisters:int, data:flash.utils.ByteArray, byteArrayOffset:uint):void;
      public function setProgramConstantsFromMatrix(programType:String, firstRegister:int, matrix:flash.geom.Matrix3D, transposedMatrix:Boolean = false):void;
      public function setProgramConstantsFromVector(programType:String, firstRegister:int, data:Vector.<Number>, numRegisters:int = -1):void;
      public function setRenderToBackBuffer():void;
      public function setRenderToTexture(texture:flash.display3D.textures.TextureBase, enableDepthAndStencil:Boolean = false, antiAlias:int = 0, surfaceSelector:int = 0, colorOutputIndex:int = 0):void;
      public function setSamplerStateAt(sampler:int, wrap:String, filter:String, mipfilter:String):void;
      public function setScissorRectangle(rectangle:flash.geom.Rectangle):void;
      public function setStencilActions(triangleFace:String = "frontAndBack", compareMode:String = "always", actionOnBothPass:String = "keep", actionOnDepthFail:String = "keep", actionOnDepthPassStencilFail:String = "keep"):void;
      public function setStencilReferenceValue(referenceValue:uint, readMask:uint = 255, writeMask:uint = 255):void;
      public function setTextureAt(sampler:int, texture:flash.display3D.textures.TextureBase):void;
      public function setVertexBufferAt(index:int, buffer:VertexBuffer3D, bufferOffset:int = 0, format:String = "float4"):void;
   }

   public final class VertexBuffer3D
   {
      public function uploadFromByteArray(data:flash.utils.ByteArray, byteArrayOffset:int, startVertex:int, numVertices:int):void;
      public function uploadFromVector(data:Vector.<Number>, startVertex:int, numVertices:int):void;
      public function dispose():void;
   }

   public final class IndexBuffer3D
   {
      public function uploadFromByteArray(data:flash.utils.ByteArray, byteArrayOffset:int, startOffset:int, count:int):void;
      public function uploadFromVector(data:Vector.<uint>, startOffset:int, count:int):void;
      public function dispose():void;
   }

   public final class Program3D
   {
      public function upload(vertexProgram:flash.utils.ByteArray, fragmentProgram:flash.utils.ByteArray):void;
      public function dispose():void;
   }
}

package flash.display3D.textures
{
   public class TextureBase extends flash.events.EventDispatcher
   {
      public function dispose():void;
   }

   public final class Texture extends TextureBase
   {
      public function uploadFromBitmapData(source:flash.display.BitmapData, miplevel:uint = 0):void;
      public function uploadFromByteArray(data:flash.utils.ByteArray, byteArrayOffset:uint, miplevel:uint = 0):void;
      public function uploadCompressedTextureFromByteArray(data:flash.utils.ByteArray, byteArrayOffset:uint, async:Boolean = false):void;
   }

   public final class RectangleTexture extends TextureBase
   {
      public function uploadFromBitmapData(source:flash.display.BitmapData):void;
      public function uploadFromByteArray(data:flash.utils.ByteArray, byteArrayOffset:uint):void;
   }

   public final class VideoTexture extends TextureBase
   {
      public function get videoWidth():int;
      public function get videoHeight():int;
      public function attachNetStream(netStream:flash.net.NetStream):void;
      public function attachCamera(theCamera:flash.media.Camera):void;
   }
}
