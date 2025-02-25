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
import java.util.ArrayList;
import java.util.List;
import sh.ory.model.Project;
import sh.ory.model.Warning;

/**
 * SuccessfulProjectConfigUpdate
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-02-06T18:31:34.031015113Z[Etc/UTC]")
public class SuccessfulProjectConfigUpdate {
  public static final String SERIALIZED_NAME_PROJECT = "project";
  @SerializedName(SERIALIZED_NAME_PROJECT)
  private Project project;

  public static final String SERIALIZED_NAME_WARNINGS = "warnings";
  @SerializedName(SERIALIZED_NAME_WARNINGS)
  private List<Warning> warnings = null;

  public SuccessfulProjectConfigUpdate() { 
  }

  public SuccessfulProjectConfigUpdate project(Project project) {
    
    this.project = project;
    return this;
  }

   /**
   * Get project
   * @return project
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Project getProject() {
    return project;
  }


  public void setProject(Project project) {
    this.project = project;
  }


  public SuccessfulProjectConfigUpdate warnings(List<Warning> warnings) {
    
    this.warnings = warnings;
    return this;
  }

  public SuccessfulProjectConfigUpdate addWarningsItem(Warning warningsItem) {
    if (this.warnings == null) {
      this.warnings = new ArrayList<>();
    }
    this.warnings.add(warningsItem);
    return this;
  }

   /**
   * Import Warnings  Not all configuration items can be imported to Ory Cloud. For example, setting the port does not make sense because Ory Cloud provides the runtime and networking.  This field contains warnings where configuration keys were found but can not be imported. These keys will be ignored by Ory Cloud. This field will help you understand why certain configuration keys might not be respected!
   * @return warnings
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Import Warnings  Not all configuration items can be imported to Ory Cloud. For example, setting the port does not make sense because Ory Cloud provides the runtime and networking.  This field contains warnings where configuration keys were found but can not be imported. These keys will be ignored by Ory Cloud. This field will help you understand why certain configuration keys might not be respected!")

  public List<Warning> getWarnings() {
    return warnings;
  }


  public void setWarnings(List<Warning> warnings) {
    this.warnings = warnings;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SuccessfulProjectConfigUpdate successfulProjectConfigUpdate = (SuccessfulProjectConfigUpdate) o;
    return Objects.equals(this.project, successfulProjectConfigUpdate.project) &&
        Objects.equals(this.warnings, successfulProjectConfigUpdate.warnings);
  }

  @Override
  public int hashCode() {
    return Objects.hash(project, warnings);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SuccessfulProjectConfigUpdate {\n");
    sb.append("    project: ").append(toIndentedString(project)).append("\n");
    sb.append("    warnings: ").append(toIndentedString(warnings)).append("\n");
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

