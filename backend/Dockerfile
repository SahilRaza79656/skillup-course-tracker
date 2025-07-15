# Use a JDK image to compile and run the app
FROM eclipse-temurin:17-jdk-alpine as builder

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Build the application (adjust if using Gradle)
RUN ./mvnw clean package -DskipTests

# -------------------------
# Run phase: Use only the built JAR
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the built jar from builder
COPY --from=builder /app/target/*.jar app.jar

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
