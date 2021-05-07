/*
 * Ory Kratos API
 *
 * Documentation for all public and administrative Ory Kratos APIs. Public and administrative APIs are exposed on different ports. Public APIs can face the public internet without any protection while administrative APIs should never be exposed without prior authorization. To protect the administative API port you should use something like Nginx, Ory Oathkeeper, or any other technology capable of authorizing incoming requests. 
 *
 * The version of the OpenAPI document: v0.6.0-alpha.2
 * Contact: hi@ory.sh
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Ory.Kratos.Client.Client.OpenAPIDateConverter;

namespace Ory.Kratos.Client.Model
{
    /// <summary>
    /// KratosSubmitSelfServiceSettingsFlowWithPasswordMethod
    /// </summary>
    [DataContract(Name = "submitSelfServiceSettingsFlowWithPasswordMethod")]
    public partial class KratosSubmitSelfServiceSettingsFlowWithPasswordMethod : IEquatable<KratosSubmitSelfServiceSettingsFlowWithPasswordMethod>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="KratosSubmitSelfServiceSettingsFlowWithPasswordMethod" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected KratosSubmitSelfServiceSettingsFlowWithPasswordMethod() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="KratosSubmitSelfServiceSettingsFlowWithPasswordMethod" /> class.
        /// </summary>
        /// <param name="csrfToken">CSRFToken is the anti-CSRF token  type: string.</param>
        /// <param name="method">Method  Should be set to password when trying to update a password.  type: string.</param>
        /// <param name="password">Password is the updated password  type: string (required).</param>
        public KratosSubmitSelfServiceSettingsFlowWithPasswordMethod(string csrfToken = default(string), string method = default(string), string password = default(string))
        {
            // to ensure "password" is required (not null)
            this.Password = password ?? throw new ArgumentNullException("password is a required property for KratosSubmitSelfServiceSettingsFlowWithPasswordMethod and cannot be null");
            this.CsrfToken = csrfToken;
            this.Method = method;
        }

        /// <summary>
        /// CSRFToken is the anti-CSRF token  type: string
        /// </summary>
        /// <value>CSRFToken is the anti-CSRF token  type: string</value>
        [DataMember(Name = "csrf_token", EmitDefaultValue = false)]
        public string CsrfToken { get; set; }

        /// <summary>
        /// Method  Should be set to password when trying to update a password.  type: string
        /// </summary>
        /// <value>Method  Should be set to password when trying to update a password.  type: string</value>
        [DataMember(Name = "method", EmitDefaultValue = false)]
        public string Method { get; set; }

        /// <summary>
        /// Password is the updated password  type: string
        /// </summary>
        /// <value>Password is the updated password  type: string</value>
        [DataMember(Name = "password", IsRequired = true, EmitDefaultValue = false)]
        public string Password { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class KratosSubmitSelfServiceSettingsFlowWithPasswordMethod {\n");
            sb.Append("  CsrfToken: ").Append(CsrfToken).Append("\n");
            sb.Append("  Method: ").Append(Method).Append("\n");
            sb.Append("  Password: ").Append(Password).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as KratosSubmitSelfServiceSettingsFlowWithPasswordMethod);
        }

        /// <summary>
        /// Returns true if KratosSubmitSelfServiceSettingsFlowWithPasswordMethod instances are equal
        /// </summary>
        /// <param name="input">Instance of KratosSubmitSelfServiceSettingsFlowWithPasswordMethod to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(KratosSubmitSelfServiceSettingsFlowWithPasswordMethod input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CsrfToken == input.CsrfToken ||
                    (this.CsrfToken != null &&
                    this.CsrfToken.Equals(input.CsrfToken))
                ) && 
                (
                    this.Method == input.Method ||
                    (this.Method != null &&
                    this.Method.Equals(input.Method))
                ) && 
                (
                    this.Password == input.Password ||
                    (this.Password != null &&
                    this.Password.Equals(input.Password))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.CsrfToken != null)
                    hashCode = hashCode * 59 + this.CsrfToken.GetHashCode();
                if (this.Method != null)
                    hashCode = hashCode * 59 + this.Method.GetHashCode();
                if (this.Password != null)
                    hashCode = hashCode * 59 + this.Password.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
