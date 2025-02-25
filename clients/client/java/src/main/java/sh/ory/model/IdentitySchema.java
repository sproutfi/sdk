/*
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v0.0.1-alpha.71
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package sh.ory.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.time.OffsetDateTime;
import java.util.UUID;

/**
 * Together the name and identity uuid are a unique index constraint. This prevents a user from having schemas with the same name. This also allows schemas to have the same name across the system.
 */
@ApiModel(description = "Together the name and identity uuid are a unique index constraint. This prevents a user from having schemas with the same name. This also allows schemas to have the same name across the system.")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-02-06T18:31:34.031015113Z[Etc/UTC]")
public class IdentitySchema {
  public static final String SERIALIZED_NAME_BLOB_NAME = "blob_name";
  @SerializedName(SERIALIZED_NAME_BLOB_NAME)
  private String blobName;

  public static final String SERIALIZED_NAME_BLOB_URL = "blob_url";
  @SerializedName(SERIALIZED_NAME_BLOB_URL)
  private String blobUrl;

  public static final String SERIALIZED_NAME_CONTENT_HASH = "content_hash";
  @SerializedName(SERIALIZED_NAME_CONTENT_HASH)
  private String contentHash;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private UUID id;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_SCHEMA = "schema";
  @SerializedName(SERIALIZED_NAME_SCHEMA)
  private Object schema;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public IdentitySchema() { 
  }

  
  public IdentitySchema(
     OffsetDateTime createdAt, 
     OffsetDateTime updatedAt
  ) {
    this();
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public IdentitySchema blobName(String blobName) {
    
    this.blobName = blobName;
    return this;
  }

   /**
   * The gcs file name  This is a randomly generated name which is used to uniquely identify the file on the blob storage
   * @return blobName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The gcs file name  This is a randomly generated name which is used to uniquely identify the file on the blob storage")

  public String getBlobName() {
    return blobName;
  }


  public void setBlobName(String blobName) {
    this.blobName = blobName;
  }


  public IdentitySchema blobUrl(String blobUrl) {
    
    this.blobUrl = blobUrl;
    return this;
  }

   /**
   * The publicly accessible url of the schema
   * @return blobUrl
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The publicly accessible url of the schema")

  public String getBlobUrl() {
    return blobUrl;
  }


  public void setBlobUrl(String blobUrl) {
    this.blobUrl = blobUrl;
  }


  public IdentitySchema contentHash(String contentHash) {
    
    this.contentHash = contentHash;
    return this;
  }

   /**
   * The Content Hash  Contains a hash of the schema&#39;s content.
   * @return contentHash
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The Content Hash  Contains a hash of the schema's content.")

  public String getContentHash() {
    return contentHash;
  }


  public void setContentHash(String contentHash) {
    this.contentHash = contentHash;
  }


   /**
   * The Schema&#39;s Creation Date
   * @return createdAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The Schema's Creation Date")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }




  public IdentitySchema id(UUID id) {
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public UUID getId() {
    return id;
  }


  public void setId(UUID id) {
    this.id = id;
  }


  public IdentitySchema name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * The schema name  This is set by the user and is for them to easily recognise their schema
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "CustomerIdentity", required = true, value = "The schema name  This is set by the user and is for them to easily recognise their schema")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public IdentitySchema schema(Object schema) {
    
    this.schema = schema;
    return this;
  }

   /**
   * The actual Identity JSON Schema
   * @return schema
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The actual Identity JSON Schema")

  public Object getSchema() {
    return schema;
  }


  public void setSchema(Object schema) {
    this.schema = schema;
  }


   /**
   * Last Time Schema was Updated
   * @return updatedAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Last Time Schema was Updated")

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IdentitySchema identitySchema = (IdentitySchema) o;
    return Objects.equals(this.blobName, identitySchema.blobName) &&
        Objects.equals(this.blobUrl, identitySchema.blobUrl) &&
        Objects.equals(this.contentHash, identitySchema.contentHash) &&
        Objects.equals(this.createdAt, identitySchema.createdAt) &&
        Objects.equals(this.id, identitySchema.id) &&
        Objects.equals(this.name, identitySchema.name) &&
        Objects.equals(this.schema, identitySchema.schema) &&
        Objects.equals(this.updatedAt, identitySchema.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(blobName, blobUrl, contentHash, createdAt, id, name, schema, updatedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IdentitySchema {\n");
    sb.append("    blobName: ").append(toIndentedString(blobName)).append("\n");
    sb.append("    blobUrl: ").append(toIndentedString(blobUrl)).append("\n");
    sb.append("    contentHash: ").append(toIndentedString(contentHash)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    schema: ").append(toIndentedString(schema)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

