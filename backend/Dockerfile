# Use Java 21 image
FROM eclipse-temurin:21-jdk

# Working directory
WORKDIR /app

# Copy jar file
COPY target/*.jar app.jar

# Expose backend port
EXPOSE 8081

# Run application
ENTRYPOINT ["java", "-jar", "app.jar"]
