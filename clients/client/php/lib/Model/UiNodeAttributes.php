<?php
/**
 * UiNodeAttributes
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  Ory\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Ory APIs
 *
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.
 *
 * The version of the OpenAPI document: v0.0.1-alpha.50
 * Contact: support@ory.sh
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.2.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Ory\Client\Model;

use \ArrayAccess;
use \Ory\Client\ObjectSerializer;

/**
 * UiNodeAttributes Class Doc Comment
 *
 * @category Class
 * @package  Ory\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class UiNodeAttributes implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = 'nodeType';

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'uiNodeAttributes';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'disabled' => 'bool',
        'label' => '\Ory\Client\Model\UiText',
        'name' => 'string',
        'nodeType' => 'string',
        'onclick' => 'string',
        'pattern' => 'string',
        'required' => 'bool',
        'type' => 'string',
        'value' => 'mixed',
        'id' => 'string',
        'text' => '\Ory\Client\Model\UiText',
        'height' => 'int',
        'src' => 'string',
        'width' => 'int',
        'href' => 'string',
        'title' => '\Ory\Client\Model\UiText',
        'async' => 'bool',
        'crossorigin' => 'string',
        'integrity' => 'string',
        'nonce' => 'string',
        'referrerpolicy' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'disabled' => null,
        'label' => null,
        'name' => null,
        'nodeType' => null,
        'onclick' => null,
        'pattern' => null,
        'required' => null,
        'type' => null,
        'value' => null,
        'id' => null,
        'text' => null,
        'height' => 'int64',
        'src' => null,
        'width' => 'int64',
        'href' => null,
        'title' => null,
        'async' => null,
        'crossorigin' => null,
        'integrity' => null,
        'nonce' => null,
        'referrerpolicy' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'disabled' => 'disabled',
        'label' => 'label',
        'name' => 'name',
        'nodeType' => 'node_type',
        'onclick' => 'onclick',
        'pattern' => 'pattern',
        'required' => 'required',
        'type' => 'type',
        'value' => 'value',
        'id' => 'id',
        'text' => 'text',
        'height' => 'height',
        'src' => 'src',
        'width' => 'width',
        'href' => 'href',
        'title' => 'title',
        'async' => 'async',
        'crossorigin' => 'crossorigin',
        'integrity' => 'integrity',
        'nonce' => 'nonce',
        'referrerpolicy' => 'referrerpolicy'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'disabled' => 'setDisabled',
        'label' => 'setLabel',
        'name' => 'setName',
        'nodeType' => 'setNodeType',
        'onclick' => 'setOnclick',
        'pattern' => 'setPattern',
        'required' => 'setRequired',
        'type' => 'setType',
        'value' => 'setValue',
        'id' => 'setId',
        'text' => 'setText',
        'height' => 'setHeight',
        'src' => 'setSrc',
        'width' => 'setWidth',
        'href' => 'setHref',
        'title' => 'setTitle',
        'async' => 'setAsync',
        'crossorigin' => 'setCrossorigin',
        'integrity' => 'setIntegrity',
        'nonce' => 'setNonce',
        'referrerpolicy' => 'setReferrerpolicy'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'disabled' => 'getDisabled',
        'label' => 'getLabel',
        'name' => 'getName',
        'nodeType' => 'getNodeType',
        'onclick' => 'getOnclick',
        'pattern' => 'getPattern',
        'required' => 'getRequired',
        'type' => 'getType',
        'value' => 'getValue',
        'id' => 'getId',
        'text' => 'getText',
        'height' => 'getHeight',
        'src' => 'getSrc',
        'width' => 'getWidth',
        'href' => 'getHref',
        'title' => 'getTitle',
        'async' => 'getAsync',
        'crossorigin' => 'getCrossorigin',
        'integrity' => 'getIntegrity',
        'nonce' => 'getNonce',
        'referrerpolicy' => 'getReferrerpolicy'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['disabled'] = $data['disabled'] ?? null;
        $this->container['label'] = $data['label'] ?? null;
        $this->container['name'] = $data['name'] ?? null;
        $this->container['nodeType'] = $data['nodeType'] ?? null;
        $this->container['onclick'] = $data['onclick'] ?? null;
        $this->container['pattern'] = $data['pattern'] ?? null;
        $this->container['required'] = $data['required'] ?? null;
        $this->container['type'] = $data['type'] ?? null;
        $this->container['value'] = $data['value'] ?? null;
        $this->container['id'] = $data['id'] ?? null;
        $this->container['text'] = $data['text'] ?? null;
        $this->container['height'] = $data['height'] ?? null;
        $this->container['src'] = $data['src'] ?? null;
        $this->container['width'] = $data['width'] ?? null;
        $this->container['href'] = $data['href'] ?? null;
        $this->container['title'] = $data['title'] ?? null;
        $this->container['async'] = $data['async'] ?? null;
        $this->container['crossorigin'] = $data['crossorigin'] ?? null;
        $this->container['integrity'] = $data['integrity'] ?? null;
        $this->container['nonce'] = $data['nonce'] ?? null;
        $this->container['referrerpolicy'] = $data['referrerpolicy'] ?? null;

        // Initialize discriminator property with the model name.
        $this->container['nodeType'] = static::$openAPIModelName;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['disabled'] === null) {
            $invalidProperties[] = "'disabled' can't be null";
        }
        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
        }
        if ($this->container['nodeType'] === null) {
            $invalidProperties[] = "'nodeType' can't be null";
        }
        if ($this->container['type'] === null) {
            $invalidProperties[] = "'type' can't be null";
        }
        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if ($this->container['text'] === null) {
            $invalidProperties[] = "'text' can't be null";
        }
        if ($this->container['src'] === null) {
            $invalidProperties[] = "'src' can't be null";
        }
        if ($this->container['href'] === null) {
            $invalidProperties[] = "'href' can't be null";
        }
        if ($this->container['title'] === null) {
            $invalidProperties[] = "'title' can't be null";
        }
        if ($this->container['async'] === null) {
            $invalidProperties[] = "'async' can't be null";
        }
        if ($this->container['crossorigin'] === null) {
            $invalidProperties[] = "'crossorigin' can't be null";
        }
        if ($this->container['integrity'] === null) {
            $invalidProperties[] = "'integrity' can't be null";
        }
        if ($this->container['nonce'] === null) {
            $invalidProperties[] = "'nonce' can't be null";
        }
        if ($this->container['referrerpolicy'] === null) {
            $invalidProperties[] = "'referrerpolicy' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets disabled
     *
     * @return bool
     */
    public function getDisabled()
    {
        return $this->container['disabled'];
    }

    /**
     * Sets disabled
     *
     * @param bool $disabled Sets the input's disabled field to true or false.
     *
     * @return self
     */
    public function setDisabled($disabled)
    {
        $this->container['disabled'] = $disabled;

        return $this;
    }

    /**
     * Gets label
     *
     * @return \Ory\Client\Model\UiText|null
     */
    public function getLabel()
    {
        return $this->container['label'];
    }

    /**
     * Sets label
     *
     * @param \Ory\Client\Model\UiText|null $label label
     *
     * @return self
     */
    public function setLabel($label)
    {
        $this->container['label'] = $label;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name The input's element name.
     *
     * @return self
     */
    public function setName($name)
    {
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets nodeType
     *
     * @return string
     */
    public function getNodeType()
    {
        return $this->container['nodeType'];
    }

    /**
     * Sets nodeType
     *
     * @param string $nodeType nodeType
     *
     * @return self
     */
    public function setNodeType($nodeType)
    {
        $this->container['nodeType'] = $nodeType;

        return $this;
    }

    /**
     * Gets onclick
     *
     * @return string|null
     */
    public function getOnclick()
    {
        return $this->container['onclick'];
    }

    /**
     * Sets onclick
     *
     * @param string|null $onclick OnClick may contain javascript which should be executed on click. This is primarily used for WebAuthn.
     *
     * @return self
     */
    public function setOnclick($onclick)
    {
        $this->container['onclick'] = $onclick;

        return $this;
    }

    /**
     * Gets pattern
     *
     * @return string|null
     */
    public function getPattern()
    {
        return $this->container['pattern'];
    }

    /**
     * Sets pattern
     *
     * @param string|null $pattern The input's pattern.
     *
     * @return self
     */
    public function setPattern($pattern)
    {
        $this->container['pattern'] = $pattern;

        return $this;
    }

    /**
     * Gets required
     *
     * @return bool|null
     */
    public function getRequired()
    {
        return $this->container['required'];
    }

    /**
     * Sets required
     *
     * @param bool|null $required Mark this input field as required.
     *
     * @return self
     */
    public function setRequired($required)
    {
        $this->container['required'] = $required;

        return $this;
    }

    /**
     * Gets type
     *
     * @return string
     */
    public function getType()
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param string $type The script MIME type
     *
     * @return self
     */
    public function setType($type)
    {
        $this->container['type'] = $type;

        return $this;
    }

    /**
     * Gets value
     *
     * @return mixed|null
     */
    public function getValue()
    {
        return $this->container['value'];
    }

    /**
     * Sets value
     *
     * @param mixed|null $value The input's value.
     *
     * @return self
     */
    public function setValue($value)
    {
        $this->container['value'] = $value;

        return $this;
    }

    /**
     * Gets id
     *
     * @return string
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string $id A unique identifier
     *
     * @return self
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets text
     *
     * @return \Ory\Client\Model\UiText
     */
    public function getText()
    {
        return $this->container['text'];
    }

    /**
     * Sets text
     *
     * @param \Ory\Client\Model\UiText $text text
     *
     * @return self
     */
    public function setText($text)
    {
        $this->container['text'] = $text;

        return $this;
    }

    /**
     * Gets height
     *
     * @return int|null
     */
    public function getHeight()
    {
        return $this->container['height'];
    }

    /**
     * Sets height
     *
     * @param int|null $height Height of the image
     *
     * @return self
     */
    public function setHeight($height)
    {
        $this->container['height'] = $height;

        return $this;
    }

    /**
     * Gets src
     *
     * @return string
     */
    public function getSrc()
    {
        return $this->container['src'];
    }

    /**
     * Sets src
     *
     * @param string $src The script source
     *
     * @return self
     */
    public function setSrc($src)
    {
        $this->container['src'] = $src;

        return $this;
    }

    /**
     * Gets width
     *
     * @return int|null
     */
    public function getWidth()
    {
        return $this->container['width'];
    }

    /**
     * Sets width
     *
     * @param int|null $width Width of the image
     *
     * @return self
     */
    public function setWidth($width)
    {
        $this->container['width'] = $width;

        return $this;
    }

    /**
     * Gets href
     *
     * @return string
     */
    public function getHref()
    {
        return $this->container['href'];
    }

    /**
     * Sets href
     *
     * @param string $href The link's href (destination) URL.  format: uri
     *
     * @return self
     */
    public function setHref($href)
    {
        $this->container['href'] = $href;

        return $this;
    }

    /**
     * Gets title
     *
     * @return \Ory\Client\Model\UiText
     */
    public function getTitle()
    {
        return $this->container['title'];
    }

    /**
     * Sets title
     *
     * @param \Ory\Client\Model\UiText $title title
     *
     * @return self
     */
    public function setTitle($title)
    {
        $this->container['title'] = $title;

        return $this;
    }

    /**
     * Gets async
     *
     * @return bool
     */
    public function getAsync()
    {
        return $this->container['async'];
    }

    /**
     * Sets async
     *
     * @param bool $async The script async type
     *
     * @return self
     */
    public function setAsync($async)
    {
        $this->container['async'] = $async;

        return $this;
    }

    /**
     * Gets crossorigin
     *
     * @return string
     */
    public function getCrossorigin()
    {
        return $this->container['crossorigin'];
    }

    /**
     * Sets crossorigin
     *
     * @param string $crossorigin The script cross origin policy
     *
     * @return self
     */
    public function setCrossorigin($crossorigin)
    {
        $this->container['crossorigin'] = $crossorigin;

        return $this;
    }

    /**
     * Gets integrity
     *
     * @return string
     */
    public function getIntegrity()
    {
        return $this->container['integrity'];
    }

    /**
     * Sets integrity
     *
     * @param string $integrity The script's integrity hash
     *
     * @return self
     */
    public function setIntegrity($integrity)
    {
        $this->container['integrity'] = $integrity;

        return $this;
    }

    /**
     * Gets nonce
     *
     * @return string
     */
    public function getNonce()
    {
        return $this->container['nonce'];
    }

    /**
     * Sets nonce
     *
     * @param string $nonce Nonce for CSP  A nonce you may want to use to improve your Content Security Policy. You do not have to use this value but if you want to improve your CSP policies you may use it. You can also choose to use your own nonce value!
     *
     * @return self
     */
    public function setNonce($nonce)
    {
        $this->container['nonce'] = $nonce;

        return $this;
    }

    /**
     * Gets referrerpolicy
     *
     * @return string
     */
    public function getReferrerpolicy()
    {
        return $this->container['referrerpolicy'];
    }

    /**
     * Sets referrerpolicy
     *
     * @param string $referrerpolicy The script referrer policy
     *
     * @return self
     */
    public function setReferrerpolicy($referrerpolicy)
    {
        $this->container['referrerpolicy'] = $referrerpolicy;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


