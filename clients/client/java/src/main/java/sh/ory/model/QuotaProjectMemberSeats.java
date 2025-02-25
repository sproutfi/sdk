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
import java.util.UUID;

/**
 * QuotaProjectMemberSeats
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-02-06T18:31:34.031015113Z[Etc/UTC]")
public class QuotaProjectMemberSeats {
  public static final String SERIALIZED_NAME_PROJECT_ID = "project_id";
  @SerializedName(SERIALIZED_NAME_PROJECT_ID)
  private UUID projectId;

  public static final String SERIALIZED_NAME_REMAINING_SEATS = "remaining_seats";
  @SerializedName(SERIALIZED_NAME_REMAINING_SEATS)
  private Long remainingSeats;

  public static final String SERIALIZED_NAME_TOTAL_SEATS = "total_seats";
  @SerializedName(SERIALIZED_NAME_TOTAL_SEATS)
  private Long totalSeats;

  public QuotaProjectMemberSeats() { 
  }

  public QuotaProjectMemberSeats projectId(UUID projectId) {
    
    this.projectId = projectId;
    return this;
  }

   /**
   * Get projectId
   * @return projectId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public UUID getProjectId() {
    return projectId;
  }


  public void setProjectId(UUID projectId) {
    this.projectId = projectId;
  }


  public QuotaProjectMemberSeats remainingSeats(Long remainingSeats) {
    
    this.remainingSeats = remainingSeats;
    return this;
  }

   /**
   * Get remainingSeats
   * @return remainingSeats
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Long getRemainingSeats() {
    return remainingSeats;
  }


  public void setRemainingSeats(Long remainingSeats) {
    this.remainingSeats = remainingSeats;
  }


  public QuotaProjectMemberSeats totalSeats(Long totalSeats) {
    
    this.totalSeats = totalSeats;
    return this;
  }

   /**
   * Get totalSeats
   * @return totalSeats
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Long getTotalSeats() {
    return totalSeats;
  }


  public void setTotalSeats(Long totalSeats) {
    this.totalSeats = totalSeats;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QuotaProjectMemberSeats quotaProjectMemberSeats = (QuotaProjectMemberSeats) o;
    return Objects.equals(this.projectId, quotaProjectMemberSeats.projectId) &&
        Objects.equals(this.remainingSeats, quotaProjectMemberSeats.remainingSeats) &&
        Objects.equals(this.totalSeats, quotaProjectMemberSeats.totalSeats);
  }

  @Override
  public int hashCode() {
    return Objects.hash(projectId, remainingSeats, totalSeats);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QuotaProjectMemberSeats {\n");
    sb.append("    projectId: ").append(toIndentedString(projectId)).append("\n");
    sb.append("    remainingSeats: ").append(toIndentedString(remainingSeats)).append("\n");
    sb.append("    totalSeats: ").append(toIndentedString(totalSeats)).append("\n");
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

