<?php
/**
 * ImageSummary
 *
 * PHP version 7.2
 *
 * @category Class
 * @package  Ory\Kratos\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Ory Kratos API
 *
 * Documentation for all public and administrative Ory Kratos APIs. Public and administrative APIs are exposed on different ports. Public APIs can face the public internet without any protection while administrative APIs should never be exposed without prior authorization. To protect the administative API port you should use something like Nginx, Ory Oathkeeper, or any other technology capable of authorizing incoming requests.
 *
 * The version of the OpenAPI document: v0.6.0-alpha.2
 * Contact: hi@ory.sh
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.1.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Ory\Kratos\Client\Model;

use \ArrayAccess;
use \Ory\Kratos\Client\ObjectSerializer;

/**
 * ImageSummary Class Doc Comment
 *
 * @category Class
 * @description ImageSummary image summary
 * @package  Ory\Kratos\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null  
 */
class ImageSummary implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ImageSummary';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'containers' => 'int',
        'created' => 'int',
        'id' => 'string',
        'labels' => 'array<string,string>',
        'parentId' => 'string',
        'repoDigests' => 'string[]',
        'repoTags' => 'string[]',
        'sharedSize' => 'int',
        'size' => 'int',
        'virtualSize' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'containers' => 'int64',
        'created' => 'int64',
        'id' => null,
        'labels' => null,
        'parentId' => null,
        'repoDigests' => null,
        'repoTags' => null,
        'sharedSize' => 'int64',
        'size' => 'int64',
        'virtualSize' => 'int64'
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
        'containers' => 'Containers',
        'created' => 'Created',
        'id' => 'Id',
        'labels' => 'Labels',
        'parentId' => 'ParentId',
        'repoDigests' => 'RepoDigests',
        'repoTags' => 'RepoTags',
        'sharedSize' => 'SharedSize',
        'size' => 'Size',
        'virtualSize' => 'VirtualSize'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'containers' => 'setContainers',
        'created' => 'setCreated',
        'id' => 'setId',
        'labels' => 'setLabels',
        'parentId' => 'setParentId',
        'repoDigests' => 'setRepoDigests',
        'repoTags' => 'setRepoTags',
        'sharedSize' => 'setSharedSize',
        'size' => 'setSize',
        'virtualSize' => 'setVirtualSize'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'containers' => 'getContainers',
        'created' => 'getCreated',
        'id' => 'getId',
        'labels' => 'getLabels',
        'parentId' => 'getParentId',
        'repoDigests' => 'getRepoDigests',
        'repoTags' => 'getRepoTags',
        'sharedSize' => 'getSharedSize',
        'size' => 'getSize',
        'virtualSize' => 'getVirtualSize'
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
        $this->container['containers'] = $data['containers'] ?? null;
        $this->container['created'] = $data['created'] ?? null;
        $this->container['id'] = $data['id'] ?? null;
        $this->container['labels'] = $data['labels'] ?? null;
        $this->container['parentId'] = $data['parentId'] ?? null;
        $this->container['repoDigests'] = $data['repoDigests'] ?? null;
        $this->container['repoTags'] = $data['repoTags'] ?? null;
        $this->container['sharedSize'] = $data['sharedSize'] ?? null;
        $this->container['size'] = $data['size'] ?? null;
        $this->container['virtualSize'] = $data['virtualSize'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['containers'] === null) {
            $invalidProperties[] = "'containers' can't be null";
        }
        if ($this->container['created'] === null) {
            $invalidProperties[] = "'created' can't be null";
        }
        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if ($this->container['labels'] === null) {
            $invalidProperties[] = "'labels' can't be null";
        }
        if ($this->container['parentId'] === null) {
            $invalidProperties[] = "'parentId' can't be null";
        }
        if ($this->container['repoDigests'] === null) {
            $invalidProperties[] = "'repoDigests' can't be null";
        }
        if ($this->container['repoTags'] === null) {
            $invalidProperties[] = "'repoTags' can't be null";
        }
        if ($this->container['sharedSize'] === null) {
            $invalidProperties[] = "'sharedSize' can't be null";
        }
        if ($this->container['size'] === null) {
            $invalidProperties[] = "'size' can't be null";
        }
        if ($this->container['virtualSize'] === null) {
            $invalidProperties[] = "'virtualSize' can't be null";
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
     * Gets containers
     *
     * @return int
     */
    public function getContainers()
    {
        return $this->container['containers'];
    }

    /**
     * Sets containers
     *
     * @param int $containers containers
     *
     * @return self
     */
    public function setContainers($containers)
    {
        $this->container['containers'] = $containers;

        return $this;
    }

    /**
     * Gets created
     *
     * @return int
     */
    public function getCreated()
    {
        return $this->container['created'];
    }

    /**
     * Sets created
     *
     * @param int $created created
     *
     * @return self
     */
    public function setCreated($created)
    {
        $this->container['created'] = $created;

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
     * @param string $id Id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets labels
     *
     * @return array<string,string>
     */
    public function getLabels()
    {
        return $this->container['labels'];
    }

    /**
     * Sets labels
     *
     * @param array<string,string> $labels labels
     *
     * @return self
     */
    public function setLabels($labels)
    {
        $this->container['labels'] = $labels;

        return $this;
    }

    /**
     * Gets parentId
     *
     * @return string
     */
    public function getParentId()
    {
        return $this->container['parentId'];
    }

    /**
     * Sets parentId
     *
     * @param string $parentId parent Id
     *
     * @return self
     */
    public function setParentId($parentId)
    {
        $this->container['parentId'] = $parentId;

        return $this;
    }

    /**
     * Gets repoDigests
     *
     * @return string[]
     */
    public function getRepoDigests()
    {
        return $this->container['repoDigests'];
    }

    /**
     * Sets repoDigests
     *
     * @param string[] $repoDigests repo digests
     *
     * @return self
     */
    public function setRepoDigests($repoDigests)
    {
        $this->container['repoDigests'] = $repoDigests;

        return $this;
    }

    /**
     * Gets repoTags
     *
     * @return string[]
     */
    public function getRepoTags()
    {
        return $this->container['repoTags'];
    }

    /**
     * Sets repoTags
     *
     * @param string[] $repoTags repo tags
     *
     * @return self
     */
    public function setRepoTags($repoTags)
    {
        $this->container['repoTags'] = $repoTags;

        return $this;
    }

    /**
     * Gets sharedSize
     *
     * @return int
     */
    public function getSharedSize()
    {
        return $this->container['sharedSize'];
    }

    /**
     * Sets sharedSize
     *
     * @param int $sharedSize shared size
     *
     * @return self
     */
    public function setSharedSize($sharedSize)
    {
        $this->container['sharedSize'] = $sharedSize;

        return $this;
    }

    /**
     * Gets size
     *
     * @return int
     */
    public function getSize()
    {
        return $this->container['size'];
    }

    /**
     * Sets size
     *
     * @param int $size size
     *
     * @return self
     */
    public function setSize($size)
    {
        $this->container['size'] = $size;

        return $this;
    }

    /**
     * Gets virtualSize
     *
     * @return int
     */
    public function getVirtualSize()
    {
        return $this->container['virtualSize'];
    }

    /**
     * Sets virtualSize
     *
     * @param int $virtualSize virtual size
     *
     * @return self
     */
    public function setVirtualSize($virtualSize)
    {
        $this->container['virtualSize'] = $virtualSize;

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


