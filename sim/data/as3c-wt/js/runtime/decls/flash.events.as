// Flash's events, implemented in `src/natives/text_events.rs`.
package flash.events
{
   public interface IEventDispatcher
   {
      function addEventListener(type:String, listener:Function, useCapture:Boolean = false, priority:int = 0, useWeakReference:Boolean = false):void;
      function removeEventListener(type:String, listener:Function, useCapture:Boolean = false):void;
      function dispatchEvent(event:Event):Boolean;
      function hasEventListener(type:String):Boolean;
      function willTrigger(type:String):Boolean;
   }

   public class EventDispatcher implements IEventDispatcher
   {
      public function EventDispatcher(target:IEventDispatcher = null);
      public function addEventListener(type:String, listener:Function, useCapture:Boolean = false, priority:int = 0, useWeakReference:Boolean = false):void;
      public function removeEventListener(type:String, listener:Function, useCapture:Boolean = false):void;
      public function dispatchEvent(event:Event):Boolean;
      public function hasEventListener(type:String):Boolean;
      public function willTrigger(type:String):Boolean;
      public function toString():String;
   }

   public class Event
   {
      public static const ACTIVATE:String = "activate";
      public static const ADDED:String = "added";
      public static const ADDED_TO_STAGE:String = "addedToStage";
      public static const CANCEL:String = "cancel";
      public static const CHANGE:String = "change";
      public static const CLOSE:String = "close";
      public static const COMPLETE:String = "complete";
      public static const CONTEXT3D_CREATE:String = "context3DCreate";
      public static const DEACTIVATE:String = "deactivate";
      public static const ENTER_FRAME:String = "enterFrame";
      public static const EXITING:String = "exiting";
      public static const EXIT_FRAME:String = "exitFrame";
      public static const FRAME_CONSTRUCTED:String = "frameConstructed";
      public static const FULLSCREEN:String = "fullScreen";
      public static const INIT:String = "init";
      public static const MOUSE_LEAVE:String = "mouseLeave";
      public static const OPEN:String = "open";
      public static const REMOVED:String = "removed";
      public static const REMOVED_FROM_STAGE:String = "removedFromStage";
      public static const RENDER:String = "render";
      public static const RESIZE:String = "resize";
      public static const SCROLL:String = "scroll";
      public static const SELECT:String = "select";
      public static const SOUND_COMPLETE:String = "soundComplete";
      public static const TAB_CHILDREN_CHANGE:String = "tabChildrenChange";
      public static const TAB_ENABLED_CHANGE:String = "tabEnabledChange";
      public static const TAB_INDEX_CHANGE:String = "tabIndexChange";
      public static const UNLOAD:String = "unload";
      public function Event(type:String, bubbles:Boolean = false, cancelable:Boolean = false);
      public function get type():String;
      public function get bubbles():Boolean;
      public function get cancelable():Boolean;
      public function get target():Object;
      public function get currentTarget():Object;
      public function get eventPhase():uint;
      public function clone():Event;
      public function formatToString(className:String, ... arguments):String;
      public function isDefaultPrevented():Boolean;
      public function preventDefault():void;
      public function stopImmediatePropagation():void;
      public function stopPropagation():void;
      public function toString():String;
   }

   public class EventPhase
   {
      public static const CAPTURING_PHASE:uint = 1;
      public static const AT_TARGET:uint = 2;
      public static const BUBBLING_PHASE:uint = 3;
   }

   public class KeyboardEvent extends Event
   {
      public static const KEY_DOWN:String = "keyDown";
      public static const KEY_UP:String = "keyUp";
      public var charCode:uint;
      public var keyCode:uint;
      public var keyLocation:uint;
      public var ctrlKey:Boolean;
      public var altKey:Boolean;
      public var shiftKey:Boolean;
      public var controlKey:Boolean;
      public var commandKey:Boolean;
      public function KeyboardEvent(type:String, bubbles:Boolean = true, cancelable:Boolean = false, charCodeValue:uint = 0, keyCodeValue:uint = 0, keyLocationValue:uint = 0, ctrlKeyValue:Boolean = false, altKeyValue:Boolean = false, shiftKeyValue:Boolean = false, controlKeyValue:Boolean = false, commandKeyValue:Boolean = false);
      public function updateAfterEvent():void;
   }

   public class MouseEvent extends Event
   {
      public static const CLICK:String = "click";
      public static const DOUBLE_CLICK:String = "doubleClick";
      public static const MOUSE_DOWN:String = "mouseDown";
      public static const MOUSE_MOVE:String = "mouseMove";
      public static const MOUSE_OUT:String = "mouseOut";
      public static const MOUSE_OVER:String = "mouseOver";
      public static const MOUSE_UP:String = "mouseUp";
      public static const MOUSE_WHEEL:String = "mouseWheel";
      public static const RIGHT_MOUSE_DOWN:String = "rightMouseDown";
      public static const RIGHT_MOUSE_UP:String = "rightMouseUp";
      public static const ROLL_OUT:String = "rollOut";
      public static const ROLL_OVER:String = "rollOver";
      public var localX:Number;
      public var localY:Number;
      public var stageX:Number;
      public var stageY:Number;
      public var relatedObject:InteractiveObject;
      public var ctrlKey:Boolean;
      public var altKey:Boolean;
      public var shiftKey:Boolean;
      public var buttonDown:Boolean;
      public var delta:int;
      public var commandKey:Boolean;
      public var controlKey:Boolean;
      public var clickCount:int;
      public function MouseEvent(type:String, bubbles:Boolean = true, cancelable:Boolean = false, localX:Number = NaN, localY:Number = NaN, relatedObject:InteractiveObject = null, ctrlKey:Boolean = false, altKey:Boolean = false, shiftKey:Boolean = false, buttonDown:Boolean = false, delta:int = 0, commandKey:Boolean = false, controlKey:Boolean = false, clickCount:int = 0);
      public function updateAfterEvent():void;
   }

   public class TouchEvent extends Event
   {
      public static const TOUCH_BEGIN:String = "touchBegin";
      public static const TOUCH_END:String = "touchEnd";
      public static const TOUCH_MOVE:String = "touchMove";
      public static const TOUCH_OUT:String = "touchOut";
      public static const TOUCH_OVER:String = "touchOver";
      public static const TOUCH_ROLL_OUT:String = "touchRollOut";
      public static const TOUCH_ROLL_OVER:String = "touchRollOver";
      public static const TOUCH_TAP:String = "touchTap";
      public var touchPointID:int;
      public var isPrimaryTouchPoint:Boolean;
      public var localX:Number;
      public var localY:Number;
      public var stageX:Number;
      public var stageY:Number;
      public var sizeX:Number;
      public var sizeY:Number;
      public var pressure:Number;
      public var relatedObject:InteractiveObject;
      public var ctrlKey:Boolean;
      public var altKey:Boolean;
      public var shiftKey:Boolean;
      public function TouchEvent(type:String, bubbles:Boolean = true, cancelable:Boolean = false, touchPointID:int = 0, isPrimaryTouchPoint:Boolean = false, localX:Number = NaN, localY:Number = NaN, sizeX:Number = NaN, sizeY:Number = NaN, pressure:Number = NaN, relatedObject:InteractiveObject = null, ctrlKey:Boolean = false, altKey:Boolean = false, shiftKey:Boolean = false);
      public function updateAfterEvent():void;
   }

   public class FocusEvent extends Event
   {
      public static const FOCUS_IN:String = "focusIn";
      public static const FOCUS_OUT:String = "focusOut";
      public static const KEY_FOCUS_CHANGE:String = "keyFocusChange";
      public static const MOUSE_FOCUS_CHANGE:String = "mouseFocusChange";
      public var relatedObject:InteractiveObject;
      public var shiftKey:Boolean;
      public var keyCode:uint;
      public var direction:String;
      public var isRelatedObjectInaccessible:Boolean;
      public function FocusEvent(type:String, bubbles:Boolean = true, cancelable:Boolean = false, relatedObject:InteractiveObject = null, shiftKey:Boolean = false, keyCode:uint = 0, direction:String = "none");
   }

   public class TextEvent extends Event
   {
      public static const LINK:String = "link";
      public static const TEXT_INPUT:String = "textInput";
      public var text:String;
      public function TextEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, text:String = "");
   }

   public class IMEEvent extends TextEvent
   {
      public static const IME_COMPOSITION:String = "imeComposition";
      public static const IME_START_COMPOSITION:String = "imeStartComposition";
      public var imeClient:IIMEClient;
      public function IMEEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, text:String = "", imeClient:IIMEClient = null);
   }

   public class ErrorEvent extends TextEvent
   {
      public static const ERROR:String = "error";
      public function ErrorEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, text:String = "", id:int = 0);
      public function get errorID():int;
   }

   public class IOErrorEvent extends ErrorEvent
   {
      public static const IO_ERROR:String = "ioError";
      public function IOErrorEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, text:String = "", id:int = 0);
   }

   public class SecurityErrorEvent extends ErrorEvent
   {
      public static const SECURITY_ERROR:String = "securityError";
      public function SecurityErrorEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, text:String = "", id:int = 0);
   }

   public class UncaughtErrorEvent extends ErrorEvent
   {
      public static const UNCAUGHT_ERROR:String = "uncaughtError";
      public function UncaughtErrorEvent(type:String = "uncaughtError", bubbles:Boolean = true, cancelable:Boolean = true, error_in:* = null);
      public function get error():*;
   }

   public class ProgressEvent extends Event
   {
      public static const PROGRESS:String = "progress";
      public static const SOCKET_DATA:String = "socketData";
      public var bytesLoaded:Number;
      public var bytesTotal:Number;
      public function ProgressEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, bytesLoaded:Number = 0, bytesTotal:Number = 0);
   }

   public class HTTPStatusEvent extends Event
   {
      public static const HTTP_RESPONSE_STATUS:String = "httpResponseStatus";
      public static const HTTP_STATUS:String = "httpStatus";
      public var redirected:Boolean;
      public var responseURL:String;
      public var responseHeaders:Array;
      public function HTTPStatusEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, status:int = 0, redirected:Boolean = false);
      public function get status():int;
   }

   public class SoftKeyboardEvent extends Event
   {
      public static const SOFT_KEYBOARD_ACTIVATE:String = "softKeyboardActivate";
      public static const SOFT_KEYBOARD_ACTIVATING:String = "softKeyboardActivating";
      public static const SOFT_KEYBOARD_DEACTIVATE:String = "softKeyboardDeactivate";
      public var relatedObject:InteractiveObject;
      public function SoftKeyboardEvent(type:String, bubbles:Boolean, cancelable:Boolean, relatedObjectVal:InteractiveObject, triggerTypeVal:String);
      public function get triggerType():String;
   }

   public class GestureEvent extends Event
   {
      public static const GESTURE_TWO_FINGER_TAP:String = "gestureTwoFingerTap";
      public var phase:String;
      public var localX:Number;
      public var localY:Number;
      public var stageX:Number;
      public var stageY:Number;
      public var ctrlKey:Boolean;
      public var altKey:Boolean;
      public var shiftKey:Boolean;
      public function GestureEvent(type:String, bubbles:Boolean = true, cancelable:Boolean = false, phase:String = null, localX:Number = 0, localY:Number = 0, ctrlKey:Boolean = false, altKey:Boolean = false, shiftKey:Boolean = false);
   }

   public class TransformGestureEvent extends GestureEvent
   {
      public static const GESTURE_PAN:String = "gesturePan";
      public static const GESTURE_ROTATE:String = "gestureRotate";
      public static const GESTURE_SWIPE:String = "gestureSwipe";
      public static const GESTURE_ZOOM:String = "gestureZoom";
      public var scaleX:Number;
      public var scaleY:Number;
      public var rotation:Number;
      public var offsetX:Number;
      public var offsetY:Number;
      public var velocity:Number;
      public function TransformGestureEvent(type:String, bubbles:Boolean = true, cancelable:Boolean = false, phase:String = null, localX:Number = 0, localY:Number = 0, scaleX:Number = 1.0, scaleY:Number = 1.0, rotation:Number = 0, offsetX:Number = 0, offsetY:Number = 0, ctrlKey:Boolean = false, altKey:Boolean = false, shiftKey:Boolean = false, commandKey:Boolean = false, controlKey:Boolean = false, velocity:Number = 0);
   }

   public class ActivityEvent extends Event
   {
      public static const ACTIVITY:String = "activity";
      public var activating:Boolean;
      public function ActivityEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, activating:Boolean = false);
   }

   public class FullScreenEvent extends ActivityEvent
   {
      public static const FULL_SCREEN:String = "fullScreen";
      public static const FULL_SCREEN_INTERACTIVE_ACCEPTED:String = "fullScreenInteractiveAccepted";
      public function FullScreenEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, fullScreen:Boolean = false, interactive:Boolean = false);
      public function get fullScreen():Boolean;
      public function get interactive():Boolean;
   }

   public class DNSResolverEvent extends Event
   {
      public static const LOOKUP:String = "lookup";
      public var host:String;
      public var resourceRecords:Array;
      public function DNSResolverEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, host:String = "", resourceRecords:Array = null);
   }
}
